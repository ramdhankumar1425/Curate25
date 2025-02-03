const fs = require("fs");
const path = require("path");
const { build } = require("vite");
const react = require("@vitejs/plugin-react");
const { execSync } = require("child_process");

// function to build using vite
const buildWithVite = async (projectId) => {
    try {
        console.log("Building project with Vite...");

        const projectPath = path.resolve(
            __dirname,
            "../store/projects",
            projectId
        );
        const outputDir = path.resolve(__dirname, "../store/builds", projectId);

        // Ensure the output directory exists
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const sharedNodeModules = path.resolve(__dirname, "node_modules");

        //     const root = path.
        await build({
            root: projectPath,
            plugins: [react()],
            build: {
                outDir: outputDir,
                emptyOutDir: true,
                rollupOptions: {
                    input: path.join(projectPath, "index.html"),
                },
            },
            env: {
                NODE_PATH: sharedNodeModules, // Ensures it uses the server's node_modules
            },
        });

        mergeFiles(projectId);

        console.log("Project built successfully!");
    } catch (err) {
        console.error("Error during build:", err);
        throw new Error(err.message);
    }
};

const mergeFiles = (buildId) => {
    const distDir = path.join(__dirname, "../store/builds", buildId);
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

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
        <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.23/dist/full.min.css" rel="stylesheet" type="text/css" />
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Oswald:wght@200..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
        </style>
    </head>
    <body>
        <div id="root"></div>
        ${scriptContent}

        <script src="https://unpkg.com/react@latest/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-dom@latest/umd/react-dom.production.min.js"></script>
    </body>
</html>`;

    // Write the merged content to the final index.html file
    fs.writeFileSync(path.join(distDir, "build.html"), indexHtml);
    console.log("Merged index.html generated!");
};

const createStaticFiles = (projectId) => {
    const distDir = path.join(__dirname, "../store/builds", projectId);
    const staticDir = path.join(__dirname, "../store/static");

    // Ensure the static directory exists
    if (!fs.existsSync(staticDir)) {
        fs.mkdirSync(staticDir, { recursive: true });
    }

    // Copy the files from the build directory to the static directory
    execSync(`cp -r ${distDir}/* ${staticDir}`);
    console.log("Static files copied successfully!");
};

module.exports = { buildWithVite };
