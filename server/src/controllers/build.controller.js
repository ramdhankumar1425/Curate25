const path = require("path");
const { build } = require("vite");
const fs = require("fs");

const viteConfig = {
    root: path.join(__dirname, "../demo"),
    build: {
        outDir: path.join(__dirname, "../demo/dist"),
        rollupOptions: {
            input: path.resolve(__dirname, "../demo/src/main.jsx"),
            external: ["react", "react-dom"],
        },
    },
};

const handleBuild = async (req, res) => {
    try {
        console.log("Starting build process...");
        await build(viteConfig);
        console.log("Build completed...");

        console.log("Merging files...");
        mergeFiles();
        console.log("Files merged!");

        const indexHtml = fs.readFileSync(
            path.join("src", "demo", "dist", "index.html"),
            "utf-8"
        );

        const files = await getDirectoryContent(
            path.join("src", "demo", "src")
        );

        // console.log(files);

        res.json({
            bundle: indexHtml,
            files,
        });
    } catch (err) {
        console.error("Error during build:", err);
        res.status(500).send("Build failed!");
    }
};

module.exports = { handleBuild };

const mergeFiles = () => {
    const distDir = path.join(__dirname, "../demo/dist");
    const assetsDir = path.join(distDir, "assets");

    // Read all files from the assets folder
    const filesInAssets = fs.readdirSync(assetsDir);

    // Initialize variables to store the content of script and style files
    let scriptContent = "";
    let styleContent = "";

    // Iterate over the files in the assets directory
    filesInAssets.forEach((file) => {
        const filePath = path.join(assetsDir, file);
        const fileExt = path.extname(file);

        // If the file is a JavaScript file, read its content
        if (fileExt === ".js") {
            const script = fs.readFileSync(filePath, "utf-8");
            scriptContent += `<script>\n${script}\n</script>\n`;
        }

        // If the file is a CSS file, read its content
        if (fileExt === ".css") {
            const style = fs.readFileSync(filePath, "utf-8");
            styleContent += `<style>\n${style}\n</style>\n`;
        }
    });

    // The index.html template where script and style will be inserted
    const indexHtml = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React</title>
        ${styleContent}
    </head>
    <body>
        <div id="root"></div>
        ${scriptContent}

        <script src="https://unpkg.com/react@latest/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-dom@latest/umd/react-dom.production.min.js"></script>
    </body>
</html>`;

    // Write the merged content to the final index.html file
    fs.writeFileSync(path.join(distDir, "index.html"), indexHtml);
    console.log("Merged index.html generated!");
};

async function getDirectoryContent(dirPath) {
    const result = [];

    // Promisify fs functions for cleaner code
    const readdir = fs.promises.readdir;
    const stat = fs.promises.stat;
    const readFile = fs.promises.readFile;

    async function readDir(currentPath) {
        const items = await readdir(currentPath, { withFileTypes: true });

        for (const item of items) {
            const itemPath = path.join(currentPath, item.name);

            if (item.isDirectory()) {
                await readDir(itemPath); // Recursively read subdirectories
            } else if (item.isFile()) {
                const content = await readFile(itemPath, "utf-8");
                result.push({ name: itemPath, content });
            }
        }
    }

    await readDir(dirPath);
    return result;
}
