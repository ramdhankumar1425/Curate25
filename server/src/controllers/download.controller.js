const fs = require("fs");
const path = require("path");
const archiver = require("archiver");
var zipper = require("zip-local");
const { createFiles } = require("../utils/createFiles.util");
const { copyStaticFiles } = require("../utils/copyStaticFiles");

const handleDownload = async (req, res) => {
    try {
        const { project, projectId } = req.body;

        if (!project || !projectId) {
            return res
                .status(400)
                .json({ message: "Project and projectId is required" });
        }

        createFiles(
            project,
            path.join(__dirname, "../store/zipped", projectId)
        );

        // copy static files
        copyStaticFiles(projectId);
        const folderPath = path.join(__dirname, "../store/zipped", projectId);

        zipper.zip(folderPath, function (error, zipped) {
            if (!error) {
                zipped.compress(); // compress before exporting

                const buff = zipped.memory(); // get the zipped file as a Buffer

                res.send(buff);
            }
        });

        // delete the zipped folder after 5 seconds
        setTimeout(() => {
            const dirPath = path.join(__dirname, "../store/zipped", projectId);
            if (fs.existsSync(dirPath)) {
                fs.rmSync(dirPath, { recursive: true, force: true });
            }
        }, 5000);
    } catch (error) {
        console.error("Error in download controller: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { handleDownload };

// Helper functions
