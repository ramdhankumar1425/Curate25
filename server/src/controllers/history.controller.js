const { User } = require("../models/user.model");
const { Project } = require("../models/project.model");
const { createFiles } = require("../utils/createFiles.util");
const { buildWithVite } = require("../utils/build.util");
const path = require("path");
const fs = require("fs");

const handleFetchHistory = async (req, res) => {
    try {
        const user = req.user;
        const email = user.email;

        const savedUser = await User.findOne({ email }).populate("projects");
        if (!savedUser) {
            throw new Error("User not found");
        }

        const history = savedUser.projects.map((project) => {
            return {
                name: project.name,
                prompt: project.chats[0],
                projectId: project._id,
                lastupdated: project.updatedAt,
            };
        });

        //    console.log("History:", history);

        res.status(200).json({
            history,
            message: "History fetched successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const handleGetProject = async (req, res) => {
    try {
        const { projectId } = req.body;
        const user = req.user;
        console.log("Getting project with projectId:", projectId);
        console.log("User:", user);

        // check if the project with this id exist for this user
        const project = await Project.findById(projectId);

        console.log("project:", project);

        if (!project) {
            return res.status(400).json({ message: "Project not found" });
        }

        const savedUser = await User.findOne({ email: user.email });

        if (!savedUser.projects.includes(projectId)) {
            return res
                .status(400)
                .json({ message: "Not authorized to access this project" });
        }

        createFiles(
            project,
            path.join(__dirname, "../store", "projects", projectId)
        );

        console.log("Bundling Started...");
        await buildWithVite(projectId);
        console.log("Bundling Completed...");

        const buildFilePath = path.join(
            __dirname,
            "../store/builds",
            projectId,
            "build.html"
        );

        const fileContent = fs.readFileSync(buildFilePath, "utf-8");

        // removeFiles(projectId);

        res.status(200).json({
            bundle: fileContent,
            message: "Build successful!",
            code: project,
            projectId: projectId,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { handleFetchHistory, handleGetProject };
