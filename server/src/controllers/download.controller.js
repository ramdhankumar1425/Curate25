const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { createFiles } = require("../utils/createFiles.util");

const AdmZip = require("adm-zip");
const fs = require("fs");

const handleDownload = async (req, res) => {
    try {
        const { project } = req.body;

        if (!project) {
            return res.status(400).json({ message: "Project is required" });
        }

        const zipId = uuidv4();

        createFiles(project, path.join(__dirname, `../store/zipped/${zipId}`));

        // create zip
    } catch (error) {
        console.error("Error in download controller: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { handleDownload };

// Helper functions
