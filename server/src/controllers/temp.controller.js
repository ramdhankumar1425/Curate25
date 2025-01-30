const fs = require("fs");
const path = require("path");
const react = require("@vitejs/plugin-react");
const { execSync } = require("child_process");
const { build } = require("vite");

const handleTemp = async (req, res) => {
    const buildFilePath = path.join(
        __dirname,
        "../store/builds",
        "1738262740967",
        "build.html"
    );

    const buildFile = fs.readFileSync(buildFilePath, "utf-8");

    res.status(200).sendFile(buildFilePath);
};

module.exports = { handleTemp };
