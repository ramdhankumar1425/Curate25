const express = require("express");
const cors = require("cors");
const authGuard = require("./middlewares/authGuard");
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
        credentials: true,
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

app.get("/test", authGuard, (req, res) => {
    console.log("Request received on test route");

    res.send("This is a test response from server");
});

app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).send("Internal Server Error");
});

module.exports = { app };
