const fs = require("fs");
const path = require("path");

const createFiles = (root, outDir) => {
    if (root.type === "directory") {
        const dirPath =
            root.name === "root" ? outDir : path.join(outDir, root.name);

        // Ensure directory exists
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        // Recurse into children
        if (root.children && root.children.length > 0) {
            root.children.forEach((child) => createFiles(child, dirPath));
        }
    } else if (root.type === "file") {
        const filePath = path.join(outDir, root.name);

        // Create file only if it doesn't already exist
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, root.content || "", "utf8");
        }
    }
};

module.exports = { createFiles };
