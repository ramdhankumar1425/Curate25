const path = require("path");
const mongoose = require("mongoose");
const fs = require("fs");
const { MAX_TOKENS_ALLOWED } = require("../constants/constants");
const { Project } = require("../models/project.model");
const { getProjectRefinePrompt } = require("../prompts/prompts");
const anthropic = require("../utils/anthropic.util");
const { buildWithVite } = require("../utils/build.util");
const { createFiles } = require("../utils/createFiles.util");
const { removeFiles } = require("../utils/removeFiles.util");
const { addIDs } = require("../utils/addIDs.util");

const handleRefine = async (req, res) => {
    const refineStart = performance.now();
    try {
        console.log("Started refining...");

        const { currProject, prompt, projectId } = req.body;

        const structure = getProjectRefinePrompt(
            JSON.stringify(currProject),
            prompt
        );
        // console.log("Structure:", structure);

        let response = await anthropic.messages.create({
            model: "claude-3-5-sonnet-20241022",
            max_tokens: MAX_TOKENS_ALLOWED,
            messages: [{ role: "user", content: structure }],
        });

        response = response.content[0].text;

        const match = response.match(/<project>([\s\S]*?)<\/project>/);
        // console.log("Match:", match);

        if (!match) {
            console.error("No project content found.");
            return res.status(500).json({ message: "Build failed" });
        }

        let project = new Function(`return ${match[1].trim()}`)();
        // console.log("Project:", project);

        // add unique identifier to all dom nodes to apply editing on client side
        project = addIDs(project);

        createFiles(
            project,
            path.join(__dirname, "../store", "projects", projectId)
        );

        console.log("Bundling Started...");
        await buildWithVite(projectId);
        console.log("Bundling Completed...");

        // push the refined project to project history
        const storedProject = await Project.findById(
            mongoose.Types.ObjectId.createFromHexString(projectId)
        );

        if (!storedProject) {
            console.error("Project not found");
            return res.status(404).json({ message: "Project not found" });
        }

        storedProject.history.push(project);
        storedProject.chats.push(prompt);
        await storedProject.save();

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
            message: "Refining successful!",
            code: project,
            projectId: projectId,
        });

        // res.status(200).json({ message: "Refining successful!", project });
    } catch (error) {
        console.error("Error during refining:", error);
        res.status(500).json({ message: "Refining failed" });
    }
    const refineEnd = performance.now();
    console.log("Refine time:", refineEnd - refineStart);
};

module.exports = { handleRefine };
