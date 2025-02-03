const express = require("express");
const cors = require("cors");
const authGuard = require("./middlewares/authGuard");
const { attachUser } = require("./middlewares/attachUser");
const { handleBuild } = require("./controllers/build.controller");
const { handleRefine } = require("./controllers/refine.controller");
const { handleUpdate } = require("./controllers/update.controller");
const { handleDownload } = require("./controllers/download.controller");
const {
    handleFetchHistory,
    handleGetProject,
} = require("./controllers/history.controller");

const app = express();

// middlewares
app.use(
    cors({
        origin:
            process.env.NODE_ENV === "production"
                ? process.env.CLIENT_URI
                : "*",
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.post("/build", authGuard, attachUser, handleBuild);
app.post("/refine", handleRefine);
app.post("/update", handleUpdate);
app.post("/download", handleDownload);
app.get("/history", authGuard, attachUser, handleFetchHistory);
app.post("/project", authGuard, attachUser, handleGetProject);

app.get("/test", (req, res) => {
    console.log("Request received on test route");

    res.send("This is a test response from server");
});

app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).send("Internal Server Error");
});

module.exports = { app };
