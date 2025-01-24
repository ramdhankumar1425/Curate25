import React, { useEffect } from "react";
import { WebContainer } from "@webcontainer/api";

const files = {
    // This is a directory - provide its name as a key
    src: {
        // Because it's a directory, add the "directory" key
        directory: {
            // This is a file - provide its path as a key:
            "main.jsx": {
                // Because it's a file, add the "file" key
                file: {
                    contents: `
              import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
     <App />
    </StrictMode>,
);

             `,
                },
            },
            // This is another file inside the same folder
            "index.css": {
                // Because it's a file, add the "file" key
                file: {
                    contents: `
              @tailwind base;
              @tailwind components;
              @tailwind utilities;

             `,
                },
            },
            "App.jsx": {
                // Because it's a file, add the "file" key
                file: {
                    contents: `function App() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-blue-600 text-white py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Ramdhan Kumar Portfolio</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#home" className="hover:underline">Home</a></li>
                            <li><a href="#projects" className="hover:underline">Projects</a></li>
                            <li><a href="#about" className="hover:underline">About</a></li>
                            <li><a href="#contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="bg-gray-100 flex-grow py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-extrabold mb-4">Welcome to My Portfolio</h2>
                    <p className="text-lg text-gray-700 mb-8">Hi, I am Ramdhan Kumar, a B.Tech student in Electronics and Communication Engineering at IIT Guwahati, graduating in 2027.</p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700">Explore My Work</button>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 bg-white">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-8">My Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="border rounded-lg p-4 shadow-md">
                            <h4 className="text-xl font-bold">Digital-Verse</h4>
                            <p className="text-gray-700">A digital circuit simulator built with React Flow, featuring logic gates, 7-segment displays, flip-flops, and Boolean expression generators.</p>
                        </div>
                        <div className="border rounded-lg p-4 shadow-md">
                            <h4 className="text-xl font-bold">Sorting Visualizer</h4>
                            <p className="text-gray-700">A visualization tool for sorting algorithms like Bubble, Insertion, and Quick Sort with adjustable speeds and steps.</p>
                        </div>
                        <div className="border rounded-lg p-4 shadow-md">
                            <h4 className="text-xl font-bold">Confio</h4>
                            <p className="text-gray-700">A Google Meet-like platform with chats, video conferencing, screen sharing, and canvas sharing, using WebRTC and MERN stack.</p>
                        </div>
                        <div className="border rounded-lg p-4 shadow-md">
                            <h4 className="text-xl font-bold">Incognect</h4>
                            <p className="text-gray-700">A privacy-focused platform for anonymous text and video chats with NSFW content moderation using ML models.</p>
                        </div>
                        <div className="border rounded-lg p-4 shadow-md">
                            <h4 className="text-xl font-bold">Floor Diagram Maker</h4>
                            <p className="text-gray-700">A web application for creating floor diagrams with drag-and-drop shapes, dimensioning, and snapping features.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-4">About Me</h3>
                    <p className="text-gray-700 max-w-2xl mx-auto">I am a passionate full-stack developer with experience in React, Tailwind CSS, and Node.js. I have worked on various projects, including digital circuit simulators, sorting visualizers, and real-time collaboration platforms. My interests lie in combining engineering and software development to create impactful tools and applications.</p>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-white">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-4">Contact Me</h3>
                    <p className="text-gray-700 mb-8">Feel free to reach out to discuss projects, collaborations, or just to say hi!</p>
                    <p className="text-gray-700">Email: <a href="mailto:ramdhankumar@example.com" className="text-blue-600 hover:underline">ramdhankumar@example.com</a></p>
                    <p className="text-gray-700">LinkedIn: <a href="https://linkedin.com/in/ramdhankumar" className="text-blue-600 hover:underline">linkedin.com/in/ramdhankumar</a></p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2025 Ramdhan Kumar. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
`,
                },
            },
        },
    },
    "eslint.config.js": {
        file: {
            contents: `import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
`,
        },
    },
    // This is a file outside the folder
    "index.html": {
        file: {
            contents: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`,
        },
    },
    "package.json": {
        file: {
            contents: `{
  "name": "client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.1.3"
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.17.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "postcss": "^8.5.1",
    "tailwindcss": "^3.4.17",
    "vite": "^6.0.5"
  }
}
`,
        },
    },
    "postcss.config.js": {
        file: {
            contents: `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`,
        },
    },
    "tailwind.config.js": {
        file: {
            contents: `/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
};
`,
        },
    },
    "vite.config.js": {
        file: {
            contents: `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()]
});
`,
        },
    },
    // This is another file outside the folder
};

function TestPage() {
    const [webcontainer, setWebContainer] = React.useState(null);
    const iframeRef = React.useRef(null);

    async function init() {
        const webcontainerInstance = await WebContainer.boot({
            coep: "credentialless",
            forwardPreviewErrors: true,
        });

        setWebContainer(webcontainerInstance);

        await webcontainerInstance.mount(files);

        webcontainerInstance.on("server-ready", (port, url) => {
            iframeRef.current.src = url;

            addEvents();
        });
    }

    async function startDevServer() {
        const installProcess = await webcontainer.spawn("npm", ["install"]);

        const installExitCode = await installProcess.exit;

        if (installExitCode !== 0) {
            throw new Error("Unable to run npm install");
        }

        // `npm run dev`
        await webcontainer.spawn("npm", ["run", "dev"]);
    }

    async function addEvents() {
        const iframe = iframeRef.current;

        if (iframe) {
            iframe.onload = () => {
                const iframeDocument =
                    iframe.contentDocument || iframe.contentWindow.document;

                const iframeBody = iframeDocument.body;

                // get all the elements
                const elements = iframeBody.querySelectorAll("*");

                elements.forEach((element) => {
                    // we will add onMouseEnter,onMouseLeave,onMouseMove events to the elements
                    element.onmouseenter = () => {
                        // we will show a outline when the element is hovered
                        element.style.outline =
                            "1px solid rgba(0, 123, 255, 0.8)";
                        element.style.cursor = "pointer";
                    };
                    element.onmouseleave = () => {
                        // remove the outline
                        element.style.outline = "";
                        element.style.cursor = "";
                    };

                    // element.onclick = handleDOMElementClick;
                });
            };
        }
    }

    useEffect(() => {
        if (webcontainer) {
            startDevServer();
        }
    }, [webcontainer]);

    useEffect(() => {
        init();
    }, []);

    return (
        <div className="w-screen h-screen overflow-hidden flex flex-col items-center justify-center text-white bg-gray-800">
            <h1>Iframe</h1>
            <iframe
                ref={iframeRef}
                //  sandbox="allow-scripts allow-same-origin"
                className="w-4/5 h-4/5 border"
            ></iframe>
        </div>
    );
}

export default TestPage;
