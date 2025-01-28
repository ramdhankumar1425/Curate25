const { MAX_TOKENS_ALLOWED } = require("../constants/constants");
const { Project } = require("../models/project.model");
const { getProjectRefinePrompt } = require("../prompts/prompts");
const anthropic = require("../utils/anthropic.util");

const handleRefine = async (req, res) => {
    try {
        const { currProject, prompt, projectId } = req.body;

        const structure = getProjectRefinePrompt(currProject, prompt);

        let response = await anthropic.messages.create({
            model: "claude-3-5-sonnet-20241022",
            max_tokens: MAX_TOKENS_ALLOWED,
            messages: [{ role: "user", content: structure }],
        });

        response = response.content[0].text;

        const match = content.match(/<project>([\s\S]*?)<\/project>/);

        if (!match) {
            console.error("No project content found.");
            return res.status(500).json({ message: "Build failed" });
        }

        const project = new Function(`return ${match[1].trim()}`)();

        // push the refined project to project history
        const storedProject = await Project.findById(projectId);

        if (!storedProject) {
            console.error("Project not found");
            return res.status(404).json({ message: "Project not found" });
        }

        storedProject.history.push(project);
        storedProject.chats.push(prompt);
        await storedProject.save();

        res.status(200).json({ message: "Refining successful!", project });
    } catch (error) {
        console.error("Error during refining:", err);
        res.status(500).json({ message: "Refining failed" });
    }
};

module.exports = { handleRefine };
