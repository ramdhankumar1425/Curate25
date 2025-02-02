const fs = require("fs");
const path = require("path");

const removeFiles = (projectId) => {
    // remove the files from projects and builds directory

    try {
        fs.rmSync(path.join(__dirname, "../store", "projects", projectId), {
            recursive: true,
        });

        fs.rmSync(path.join(__dirname, "../store", "builds", projectId), {
            recursive: true,
        });
    } catch (error) {
        throw new Error("Error during file removal:", error);
    }
};

module.exports = { removeFiles };
