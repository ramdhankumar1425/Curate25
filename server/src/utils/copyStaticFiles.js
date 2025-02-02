const fs = require("fs");
const path = require("path");

const copyStaticFiles = (projectId) => {
    try {
        const source = path.join(__dirname, "../store/static");
        const destination = path.join(__dirname, "../store/zipped", projectId);

        // Ensure the destination directory exists
        if (!fs.existsSync(destination)) {
            fs.mkdirSync(destination, { recursive: true });
        }

        const files = fs.readdirSync(source);

        files.forEach((file) => {
            const srcFile = path.join(source, file);
            const destFile = path.join(destination, file);

            // Check if the source file exists before copying
            if (fs.existsSync(srcFile)) {
                try {
                    fs.copyFileSync(srcFile, destFile);
                    console.log(`Copied: ${file}`);
                } catch (err) {
                    console.error(`Error copying file: ${file}`, err);
                }
            } else {
                console.warn(`Skipping missing file: ${file}`);
            }
        });
    } catch (error) {
        console.error("Error in copyStaticFiles:", error);
    }
};

module.exports = { copyStaticFiles };
