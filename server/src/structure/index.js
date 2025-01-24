const fs = require("fs");
const path = require("path");

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

const root = {
    type: "directory",
    name: "root",
    children: [
        {
            type: "directory",
            name: "src",
            children: [
                {
                    type: "file",
                    name: "main.jsx",
                    content:
                        "import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\n\nReactDOM.render(<App />, document.getElementById('root'));",
                },
                {
                    type: "file",
                    name: "App.jsx",
                    content:
                        "import React from 'react';\nimport Header from './components/Header';\nimport Footer from './components/Footer';\n\nconst App = () => {\n    return (\n        <div>\n            <Header />\n            <Footer />\n        </div>\n    );\n};\n\nexport default App;",
                },
                {
                    type: "directory",
                    name: "components",
                    children: [
                        {
                            type: "file",
                            name: "Header.jsx",
                            content:
                                "import React from 'react';\n\nconst Header = () => {\n    return (\n        <div>\n            <h1>Header</h1>\n        </div>\n    );\n};\n\nexport default Header;",
                        },
                        {
                            type: "file",
                            name: "Footer.jsx",
                            content:
                                "import React from 'react';\n\nconst Footer = () => {\n    return (\n        <div>\n            <h1>Footer</h1>\n        </div>\n    );\n};\n\nexport default Footer;",
                        },
                    ],
                },
            ],
        },
    ],
};

createStructure(root, path.join(__dirname));
