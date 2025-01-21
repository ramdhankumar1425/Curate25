import React, { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";
import FileExplorer from "./FileExplorer";

// Configure MonacoEnvironment for web workers
// if (typeof window !== "undefined") {
//     window.MonacoEnvironment = {
//         getWorker: function (_, label) {
//             if (label === "json") {
//                 return new Worker(
//                     new URL(
//                         "monaco-editor/esm/vs/language/json/json.worker",
//                         import.meta.url
//                     )
//                 );
//             }
//             if (label === "css" || label === "scss" || label === "less") {
//                 return new Worker(
//                     new URL(
//                         "monaco-editor/esm/vs/language/css/css.worker",
//                         import.meta.url
//                     )
//                 );
//             }
//             if (
//                 label === "html" ||
//                 label === "handlebars" ||
//                 label === "razor"
//             ) {
//                 return new Worker(
//                     new URL(
//                         "monaco-editor/esm/vs/language/html/html.worker",
//                         import.meta.url
//                     )
//                 );
//             }
//             if (label === "typescript" || label === "javascript") {
//                 return new Worker(
//                     new URL(
//                         "monaco-editor/esm/vs/language/typescript/ts.worker",
//                         import.meta.url
//                     )
//                 );
//             }
//             return new Worker(
//                 new URL(
//                     "monaco-editor/esm/vs/editor/editor.worker",
//                     import.meta.url
//                 )
//             );
//         },
//     };
// }

const value = `import { Code, Eye } from "lucide-react";
import React from "react";

function Sidebar({ setView }) {
    return (
        <div className="w-10 h-screen border-r flex flex-col items-center space-y-2 pt-5 bg-gray-800">
            <div
                className="p-1 bg-gray-900 hover:bg-gray-950 duration-150 rounded-md cursor-pointer"
                onClick={() => setView("code")}
            >
                <Code />
            </div>

            <div
                className="p-1 bg-gray-900 hover:bg-gray-950 duration-150 rounded-md cursor-pointer"
                onClick={() => setView("preview")}
            >
                <Eye />
            </div>
        </div>
    );
}

export default Sidebar;
`;

function CodeEditor() {
    const editorRef = useRef(null);

    useEffect(() => {
        if (editorRef.current) {
            const editor = monaco.editor.create(editorRef.current, {
                value: value,
                language: "javascript",
                theme: "vs-dark",
                automaticLayout: true,
            });

            editor.onDidChangeModelContent(() => {
                console.log(editor.getValue());
            });

            return () => {
                editor.dispose();
            };
        }
    }, []);

    return (
        <div className="h-screen flex-1 flex">
            <FileExplorer />
            <div ref={editorRef} className="w-full flex-1"></div>
        </div>
    );
}

export default CodeEditor;
