import React, { useEffect, useRef, useState } from "react";
import * as monaco from "monaco-editor";
import FileExplorer from "./FileExplorer";


function CodeEditor() {
    const editorRef = useRef(null);
    const monacoEditorRef = useRef(null);
    const [selectedFileContent, setSelectedFileContent] = useState("Select a file to start editing...");


    useEffect(() => {
        if (!editorRef.current) return;

        // Initalizing only once.
        monacoEditorRef.current = monaco.editor.create(editorRef.current, {
            value: selectedFileContent,
            language: "javascript",
            theme: "vs-dark",
            automaticLayout: true,
        });

        return () => {
            monacoEditorRef.current.dispose(); 
        };
    }, []); 


    useEffect(() => {
        if (monacoEditorRef.current) {
            const model = monacoEditorRef.current.getModel();
            if (model) {
                model.setValue(selectedFileContent);
            }
        }
    }, [selectedFileContent]);

    return (
        <div className="h-screen flex">
            <div className="w-1/5">
                <FileExplorer onSelectFile= {setSelectedFileContent} />

            </div>
            <div ref={editorRef} className="w-4/5"></div>
        </div>
    );
}

export default CodeEditor;

