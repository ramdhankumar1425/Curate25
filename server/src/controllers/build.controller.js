const fs = require("fs");
const path = require("path");
const {
    MIN_PROMPT_LENGTH,
    MAX_PROMPT_LENGTH,
    MAX_TOKENS_ALLOWED,
} = require("../constants/constants");
const { getBuildPrompt, getRefinePrompt } = require("../prompts/prompts");
const { User } = require("../models/user.model");
const { Project } = require("../models/project.model");
const anthropic = require("../utils/anthropic.util");
const { createFiles } = require("../utils/createFiles.util");
const { buildWithVite } = require("../utils/build.util");
const { removeFiles } = require("../utils/removeFiles.util");
const { addIDs } = require("../utils/addIDs.util");

// main function to handle build request
const handleBuild = async (req, res) => {
    const buildStart = performance.now();

    try {
        console.log("Started building...");

        // user received from attachUser middleware
        const user = req.user;

        if (!user) {
            console.error("User not found in request.");
            return res.status(500).json({ message: "Build failed" });
        }

        const { prompt } = req.body;

        // refine prompt
        const { projectName, refinedPrompt } = await checkPromptAndRefine(
            prompt
        );

        const structure = getBuildPrompt(refinedPrompt, projectName);

        const response = await anthropic.messages.create({
            model: "claude-3-5-sonnet-20241022",
            max_tokens: MAX_TOKENS_ALLOWED,
            messages: [{ role: "user", content: structure }],
        });

        const content = response.content[0].text;

        // console.log("Response:", content);

        const match = content.match(/<project>([\s\S]*?)<\/project>/);

        if (!match) {
            console.error("No project content found.");
            return res.status(500).json({ message: "Build failed" });
        }

        // const project = JSON.parse(match[1].trim());
        let project = new Function(`return ${match[1].trim()}`)();

        // add unique identifier to all dom nodes to apply editing on client side
        project = addIDs(project);

        // console.log("Project content:", match[1]);
        // store project in database, associate with user if user exists else create new user in database
        let storedUser = await User.findOne({ email: user.email });

        if (!storedUser) {
            storedUser = new User({
                email: user.email,
            });

            await storedUser.save();
        }

        const newProject = new Project({
            name: projectName,
            user: storedUser._id,
            history: [project],
            chats: [prompt],
        });

        await newProject.save();

        storedUser.projects.push(newProject._id);

        const projectId = newProject._id.toString();

        fs.writeFileSync(
            path.join(__dirname, "../store", "responses", `${projectId}.json`),
            JSON.stringify(project, null, 2)
        );

        createFiles(
            project,
            path.join(__dirname, "../store", "projects", projectId)
        );

        console.log("Bundling Started...");
        await buildWithVite(projectId);
        console.log("Bundling Completed...");

        await storedUser.save();

        const buildFilePath = path.join(
            __dirname,
            "../store/builds",
            projectId,
            "build.html"
        );

        const fileContent = fs.readFileSync(buildFilePath, "utf-8");

        removeFiles(projectId);

        res.status(200).json({
            bundle: fileContent,
            message: "Build successful!",
            code: project,
            projectId: projectId,
        });
    } catch (err) {
        console.error("Error during build:", err);
        res.status(500).json({ message: "Build failed" });
    } finally {
        console.log("Building completed!...");
    }

    const buildEnd = performance.now();

    console.log("Build time:", buildEnd - buildStart, "ms");
};

module.exports = { handleBuild };

// helper functions
const checkPromptAndRefine = async (prompt) => {
    try {
        //check type
        if (typeof prompt !== "string") {
            console.log("Prompt should be a string.");

            throw new Error("Prompt should be a string.");
        }

        // check if prompt contains any invalid characters
        const invalidChars = prompt.match(/[^a-zA-Z0-9\s.,?!;:()'"@#$%&*+-]/g);

        if (invalidChars && invalidChars.length > 0) {
            console.log("Invalid characters found in the prompt.");

            throw new Error("Invalid characters found in the prompt.");
        }

        // length check
        if (
            prompt.length < MIN_PROMPT_LENGTH ||
            prompt.length > MAX_PROMPT_LENGTH
        ) {
            console.log(
                `Prompt length should be between ${MIN_PROMPT_LENGTH} and ${MAX_PROMPT_LENGTH} characters.`
            );

            throw new Error(
                `Prompt length should be between ${MIN_PROMPT_LENGTH} and ${MAX_PROMPT_LENGTH} characters.`
            );
        }

        // refine prompt
        const modifiedPrompt = getRefinePrompt(prompt);

        let response = await anthropic.messages.create({
            model: "claude-3-opus-20240229",
            max_tokens: 4000,
            messages: [{ role: "user", content: modifiedPrompt }],
        });

        response = response.content[0].text;

        // check prompt validity
        const validityMatch = response.match(
            /<valid_prompt>(true|false)<\/valid_prompt>/
        );

        if (!validityMatch || validityMatch[1] !== "true") {
            console.error("Invalid prompt provided.");

            throw new Error("Invalid prompt provided.");
        }

        // extract project name and refined prompt
        const projectNameMatch = response.match(
            /<project_name>([\s\S]*?)<\/project_name>/
        );

        const projectName = projectNameMatch
            ? projectNameMatch[1].trim()
            : "default project";

        const refinedPromptMatch = response.match(
            /<refined_prompt>([\s\S]*?)<\/refined_prompt>/
        );

        const refinedPrompt = refinedPromptMatch?.[1].trim();

        // *** TEMP ***
        fs.writeFileSync(
            path.join(__dirname, "../store", "prompts", `${Date.now()}.json`),
            JSON.stringify({ prompt, refinedPrompt }, null, 2)
        );

        return { projectName, refinedPrompt };
    } catch (error) {
        console.log("Error refining prompt:", error.message);
        throw new Error(error.message);
    }
};
