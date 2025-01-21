import { Code, Eye } from "lucide-react";
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
