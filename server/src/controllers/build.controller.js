const fs = require("fs");
const path = require("path");
const { Anthropic } = require("@anthropic-ai/sdk");
const { build } = require("vite");
const { getStructure } = require("../structure/structure");

const anthropic = new Anthropic({
    apiKey: process.env.CLAUDE_API_KEY,
});

// main function to handle build request
const handleBuild = async (req, res) => {
    try {
        console.log("Started building...");

        const { prompt } = req.body;

        // refine prompt
        const { projectName, refinedPrompt } = await checkPromptAndRefine(
            prompt
        );

        const structure = getStructure(refinedPrompt);

        const response = await anthropic.messages.create({
            model: "claude-3-5-sonnet-20241022",
            max_tokens: 5000,
            messages: [{ role: "user", content: structure }],
        });

        const content = response.content[0].text;

        const match = content.match(/<project>([\s\S]*?)<\/project>/);

        if (!match) {
            console.error("No project content found.");
            return res.status(500).json({ message: "Build failed" });
        }

        // console.log("Project content:", match[1].trim());

        // const project = JSON.parse(match[1].trim());
        const project = new Function(`return ${match[1].trim()}`)();
        console.log("Project:", project);

        fs.writeFileSync(
            path.join(__dirname, "../store", "responses", `${Date.now()}.json`),
            JSON.stringify(project, null, 2)
        );

        createStructure(
            project,
            path.join(__dirname, "../store", "projects", Date.now().toString())
        );

        console.log("Building completed!");
        res.send("Build completed!");
    } catch (err) {
        console.error("Error during build:", err);
        res.status(500).send("Build failed!");
    }
};

module.exports = { handleBuild };

// helper functions
const checkPromptAndRefine = async (prompt) => {
    try {
        // check if prompt contains any invalid characters
        const invalidChars = prompt.match(/[^a-zA-Z0-9\s.,?!]/g);

        if (invalidChars && invalidChars.length > 0) {
            console.log("Invalid characters found in the prompt.");

            throw new Error("Invalid characters found in the prompt.");
        }

        // length check
        if (prompt.length < 10 || prompt.length > 250) {
            console.log(
                "Prompt length should be between 10 and 250 characters."
            );

            throw new Error(
                "Prompt length should be between 10 and 250 characters."
            );
        }

        //check type
        if (typeof prompt !== "string") {
            console.log("Prompt should be a string.");

            throw new Error("Prompt should be a string.");
        }

        // refine prompt
        const modifiedPrompt = `User wants to create a website and provided the following prompt, now you have to refine it, add more details to it.
            CRITICAL: You must write the refined prompt only. No explanation or any other text should be added.
            ULTRA IMPORTANT: Check if the user's input inside <prompt> </prompt> is a valid input and is reated to building to a website ,if not return false  inside <validity>  </validity> and true otherwise .
            ULTRA IMPORTANT: If the user's prompt is valid , return a valid project name from the prompt inside <project_name> </project_name>.
            ULTRA IMPORTANT: Return the refined prompt inside <refined_prompt> </refined_prompt>. Make sure you follow the mentioned format and in the same order and don't add anything else .

            <prompt> ${prompt} </prompt>
         `;

        let response = await anthropic.messages.create({
            model: "claude-3-opus-20240229",
            max_tokens: 3000,
            messages: [{ role: "user", content: modifiedPrompt }],
        });

        response = response.content[0].text;

        const validityMatch = response.match(
            /<validity>(true|false)<\/validity>/
        );

        if (!validityMatch || validityMatch[1] !== "true") {
            console.error("Invalid prompt provided.");

            throw new Error("Invalid prompt provided.");
        }

        const projectNameMatch = response.match(
            /<project_name>([\s\S]*?)<\/project_name>/
        );

        const projectName = projectNameMatch
            ? projectNameMatch[1].trim()
            : "default_project";

        const refinedPromptMatch = response.match(
            /<refined_prompt>([\s\S]*?)<\/refined_prompt>/
        );

        const refinedPrompt = refinedPromptMatch?.[1].trim();

        // *** TEMP
        fs.writeFileSync(
            path.join(__dirname, "../store", "prompts", `${Date.now()}.json`),
            JSON.stringify({ prompt, refinedPrompt }, null, 2)
        );

        return { projectName, refinedPrompt };
    } catch (error) {
        console.log("Error refining prompt:", error.message);
        throw new Error(error.message);
    }
};

// Function to create directories and files recursively
const createStructure = (root, currentPath = ".") => {
    if (root.type === "directory") {
        const dirPath = path.join(currentPath, root.name);

        // Ensure directory exists
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        // Recurse into children
        if (root.children && root.children.length > 0) {
            root.children.forEach((child) => createStructure(child, dirPath));
        }
    } else if (root.type === "file") {
        const filePath = path.join(currentPath, root.name);

        // Create file only if it doesn't already exist
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, root.content || "", "utf8");
        }
    }
};

// function to build using vite
const buildWithVite = async (rootPath) => {
    try {
        const viteConfig = {
            root: path.join(__dirname, rootPath),
            build: {
                outDir: path.join(
                    __dirname,
                    "../store",
                    "builds",
                    Date.now().toString()
                ),
                rollupOptions: {
                    input: path.resolve(__dirname, "src/demo/index.html"),
                },
            },
        };
        console.log("Starting build process...");
        await build(viteConfig);
        console.log("Build completed...");
    } catch (err) {
        console.error("Error during build:", err);
        throw new Error(err.message);
    }
};

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

// const handleBuild = async (req, res) => {
//     try {
//         console.log("Starting build process...");
//         await build(viteConfig);
//         console.log("Build completed...");

//         console.log("Merging files...");
//         mergeFiles();
//         console.log("Files merged!");

//         const indexHtml = fs.readFileSync(
//             path.join("src", "demo", "dist", "index.html"),
//             "utf-8"
//         );

//         const files = await getDirectoryContent(
//             path.join("src", "demo", "src")
//         );

//         // console.log(files);

//         res.json({
//             bundle: indexHtml,
//             files,
//         });
//     } catch (err) {
//         console.error("Error during build:", err);
//         res.status(500).send("Build failed!");
//     }
// };
