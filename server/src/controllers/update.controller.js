const fs = require("fs");
const path = require("path");
const { createFiles } = require("../utils/createFiles.util");
const { buildWithVite } = require("../utils/build.util");
const { removeFiles } = require("../utils/removeFiles.util");

const handleUpdate = async (req, res) => {
    const updateStart = performance.now();

    try {
        console.log("Update started...");

        const { currProject, projectId } = req.body;

        // const indexCss = currProject?.children
        //     ?.find((child) => child.name === "src")
        //     ?.children?.find((child) => child.name === "index.css");
        // console.log(indexCss);

        // if (indexCss) {
        //     fs.writeFileSync(
        //         path.join(__dirname, "../store/temp", "index1.css"),
        //         indexCss.content
        //     );
        // }

        createFiles(
            currProject,
            path.join(__dirname, "../store", "projects", projectId)
        );

        console.log("Bundling Started...");
        await buildWithVite(projectId);
        console.log("Bundling Completed...");

        const buildFilePath = path.join(
            __dirname,
            "../store/builds",
            projectId,
            "build.html"
        );

        const fileContent = fs.readFileSync(buildFilePath, "utf-8");

        removeFiles(projectId);

        res.status(200).json({
            bundle: fileContent,
            message: "Update successful!",
        });
    } catch (error) {
        console.error("Error during update:", error);
        res.status(500).json({ message: "Update failed" });
    } finally {
        console.log("Update completed!...");
    }

    const updateEnd = performance.now();
    console.log("Time taken by update:", updateEnd - updateStart);
};

module.exports = { handleUpdate };
