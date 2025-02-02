const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        history: [
            {
                type: Object,
            },
        ],
        chats: [
            {
                type: String,
            },
        ],
    },
    { timestamps: true, _id: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = { Project };
