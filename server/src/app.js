const express = require("express");
const cors = require("cors");
const { handleBuild } = require("./controllers/build.controller");
const { handleRefine } = require("./controllers/refine.controller");
const { handleUpdate } = require("./controllers/update.controller");
const { handleDownload } = require("./controllers/download.controller");
const { handleUser } = require("./controllers/user.controller");

const app = express();

// middlewares
app.use(
    cors({
        origin: process.env.CLIENT_URI,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.post("user", handleUser);

app.post("/build", handleBuild);
app.post("/refine", handleRefine);
app.post("/update", handleUpdate);
app.post("/download", handleDownload);

app.get("/test", (req, res) => {
    console.log("Request received on test route");

    res.send("This is a test response from server");
});

module.exports = { app };
