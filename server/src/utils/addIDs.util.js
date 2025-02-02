const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const { EDIT_IDENTIFIER } = require("../constants/constants");

const addIDs = (root) => {
    if (!root || typeof root !== "object") return;

    if (root.type === "directory" && Array.isArray(root.children)) {
        root.children.forEach(addIDs);
    } else if (root.type === "file" && typeof root.content === "string") {
        if (root.name !== "main.jsx" && root.name !== "App.jsx") {
            root.content = root.content.replace(
                /<(\w+)([^>]*)>/g,
                (match, tag, attrs) => {
                    return `<${tag} data-${EDIT_IDENTIFIER}="${uuidv4()}"${attrs}>`;
                }
            );
        }
    }

    return root;
};

module.exports = { addIDs };
