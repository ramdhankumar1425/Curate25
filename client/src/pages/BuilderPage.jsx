import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useProject } from "../context/ProjectProvider";
import Sidebar from "../components/builder/Sidebar";
import Preview from "../components/builder/Preview";
import CodeEditor from "../components/builder/CodeEditor";
import EditorPanel from "../components/builder/EditorPanel";
import FileExplorer from "../components/builder/FileExplorer";
import Chatbot from "../components/builder/Chatbot";

function BuilderPage() {
    const { mode } = useProject();
    const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

    // to prevent the page from rendering before the user is authenticated
    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            // loginWithRedirect();
        }
    }, [isLoading, isAuthenticated, loginWithRedirect]);

    return (
        <div className="w-full h-screen overflow-hidden flex bg-gray-900 text-gray-200">
            <Sidebar />

            {mode === "code" ? <CodeEditor /> : <Preview />}

            <div className="h-full bg-gray-900 text-white border-l border-gray-700">
                {mode === "chatbot" ? (
                    <Chatbot />
                ) : mode === "code" ? (
                    <FileExplorer />
                ) : (
                    <EditorPanel />
                )}
            </div>
        </div>
    );
}

export default BuilderPage;
