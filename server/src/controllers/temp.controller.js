const fs = require("fs");
const path = require("path");
const react = require("@vitejs/plugin-react");
const { execSync } = require("child_process");
const { build } = require("vite");

const handleTemp = async (req, res) => {
    const projectId = "679f272b838132be9b9273fd";
    const buildFilePath = path.join(
        __dirname,
        "../store/builds",
        projectId,
        "build.html"
    );
    const codePath = path.join(
        __dirname,
        "../store/responses",
        `${projectId}.json`
    );

    // we have to store this file content inside string
    const fileContent = fs.readFileSync(buildFilePath, "utf-8");
    let code = fs.readFileSync(codePath, "utf-8");
    code = new Function(`return ${code}`)();

    // send the file content as response
    res.status(200).json({
        bundle: fileContent,
        message: "Build successful!",
        code,
        projectId,
    });

    // res.status(200).sendFile(buildFilePath);
};

module.exports = { handleTemp };
