import React, { useState } from "react";
import Sidebar from "../components/builder/Sidebar";
import Preview from "../components/builder/Preview";
import CodeEditor from "../components/builder/CodeEditor";
import EditorPanel from "../components/builder/EditorPanel";

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
