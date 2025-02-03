const fs = require("fs");
const path = require("path");
const archiver = require("archiver");
const { createFiles } = require("../utils/createFiles.util");
const { copyStaticFiles } = require("../utils/copyStaticFiles");

const handleDownload = async (req, res) => {
    try {
        console.log("Downloading...");
        const { project, projectId } = req.body;

        if (!project || !projectId) {
            return res
                .status(400)
                .json({ message: "Project and projectId are required" });
        }

        // console.log("Project ID:", projectId);
        const folderPath = path.join(__dirname, "../store/zipped", projectId);
        // console.log("Creating files...");
        createFiles(project, folderPath);
        copyStaticFiles(projectId);

        const zipFilePath = `${folderPath}.zip`;

        // console.log("Zipping the folder using archiver...");

        const archive = archiver("zip", { zlib: { level: 9 } });

        const output = fs.createWriteStream(zipFilePath);

        output.on("close", () => {
            console.log("ZIP file created successfully:", zipFilePath);
            // console.log("deleting foldert created");
            fs.rmdirSync(folderPath, { recursive: true });
            if (!fs.existsSync(zipFilePath)) {
                return res
                    .status(500)
                    .json({ message: "ZIP file not found after creation" });
            }

            // console.log("Serving ZIP file:", zipFilePath);

            res.setHeader(
                "Content-Disposition",
                "attachment; filename=output.zip"
            );
            res.setHeader("Content-Type", "application/zip");

            res.sendFile(zipFilePath, (err) => {
                if (err) {
                    console.error("Error sending ZIP file:", err);
                    res.status(500).json({
                        message: "Failed to send ZIP file",
                    });
                } else {
                    console.log("ZIP file sent successfully, cleaning up...");
                    // Uncomment below if you want to delete the file after sending
                    fs.unlinkSync(zipFilePath);
                }
            });
        });

        output.on("error", (err) => {
            console.error("Error writing ZIP file:", err);
            res.status(500).json({ message: "Error creating ZIP file" });
        });

        archive.on("error", (err) => {
            console.error("Archiving error:", err);
            res.status(500).json({
                message: "Error during ZIP file compression",
            });
        });

        archive.pipe(output);
        archive.directory(folderPath, false);
        archive.finalize();
    } catch (error) {
        console.error("Error in download controller:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { handleDownload };
