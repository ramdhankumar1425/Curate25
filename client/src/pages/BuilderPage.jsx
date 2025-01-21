import React, { useState } from "react";
import Preview from "../components/builder/Preview";
import EditorPanel from "../components/builder/EditorPanel";
import Sidebar from "../components/builder/Sidebar";
import CodeEditor from "../components/CodeEditor";

function BuilderPage() {
    const [view, setView] = useState("code");

    return (
        <div className="w-full h-screen overflow-hidden flex  bg-gray-900 text-gray-200">
            <Sidebar setView={setView} />
            {view === "preview" ? <Preview /> : <CodeEditor />}

            <EditorPanel />
        </div>
    );
}

export default BuilderPage;
