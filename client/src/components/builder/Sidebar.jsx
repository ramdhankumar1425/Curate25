import {
    Bot,
    CircleOff,
    CloudDownload,
    Code,
    Eye,
    Grip,
    LaptopMinimal,
    Pencil,
    PencilOff,
    Redo,
    Smartphone,
    Tablet,
    Undo,
} from "lucide-react";
import React from "react";
import { useProject } from "../../context/ProjectProvider";
import { Link } from "react-router-dom";

function Sidebar() {
    const {
        mode,
        setMode,
        isEditing,
        setIsEditing,
        isDragging,
        setIsDragging,
        viewPort,
        setViewPort,
        handleUndo,
        handleRedo,
        handleDownload,
    } = useProject();

    return (
        <div className="w-16 h-full flex flex-col items-center space-y-2 pt-5 bg-gray-900 border-r border-gray-700">
            <Link to="/">
                <img src="images/logo.png" alt="Logo" className="w-7 mb-5" />
            </Link>

            <button
                className={`p-2 ${
                    mode === "chatbot" && "bg-gray-700"
                } hover:bg-gray-950 duration-150 rounded-lg`}
                onClick={() => setMode("chatbot")}
                title="Chatbot"
            >
                <Bot className="scale-[1.1]" />
            </button>

            <button
                className={`p-2 ${
                    mode === "code" && "bg-gray-700"
                } hover:bg-gray-950 duration-150 rounded-lg`}
                onClick={() => setMode("code")}
                title="Code"
            >
                <Code />
            </button>

            <button
                className={`p-2 ${
                    mode === "preview" && "bg-gray-700"
                } hover:bg-gray-950 duration-150 rounded-lg`}
                onClick={() => setMode("preview")}
                title="Preview"
            >
                <Eye />
            </button>

            <hr className="w-10 border-gray-700" />

            <button
                className="p-2 bg-gray-900 hover:bg-gray-950 duration-150 rounded-md cursor-pointer"
                onClick={() => setIsEditing(!isEditing)}
                title="Edit elements"
            >
                {isEditing ? <Pencil /> : <PencilOff />}
            </button>

            <button
                className="p-2 bg-gray-900 hover:bg-gray-950 duration-150 rounded-md cursor-pointer"
                onClick={() => setIsDragging(!isDragging)}
                title="Drag elements"
            >
                {isDragging ? <Grip /> : <CircleOff />}
            </button>

            <hr className="w-10 border-gray-700" />

            <button
                className={`p-2 ${
                    viewPort === "desktop" && "bg-gray-700"
                } hover:bg-gray-950 duration-150 rounded-lg`}
                onClick={() => setViewPort("desktop")}
                title="Desktop view"
            >
                <LaptopMinimal />
            </button>

            <button
                className={`p-2 ${
                    viewPort === "tablet" && "bg-gray-700"
                } hover:bg-gray-950 duration-150 rounded-lg`}
                onClick={() => setViewPort("tablet")}
                title="Tablet view"
            >
                <Tablet />
            </button>

            <button
                className={`p-2 ${
                    viewPort === "mobile" && "bg-gray-700"
                } hover:bg-gray-950 duration-150 rounded-lg`}
                onClick={() => setViewPort("mobile")}
                title="Mobile view"
            >
                <Smartphone />
            </button>

            <hr className="w-10 border-gray-700" />

            <button
                className="p-2 bg-gray-900 hover:bg-gray-950 duration-150 rounded-md cursor-pointer"
                onClick={() => handleUndo()}
                title="Undo"
            >
                <Undo />
            </button>

            <button
                className="p-2 bg-gray-900 hover:bg-gray-950 duration-150 rounded-md cursor-pointer"
                onClick={() => handleRedo()}
                title="Redo"
            >
                <Redo />
            </button>

            <hr className="w-10 border-gray-700" />

            <button
                className="p-2 bg-gray-900 hover:bg-gray-950 duration-150 rounded-md cursor-pointer"
                onClick={() => handleDownload()}
                title="Download project"
            >
                <CloudDownload />
            </button>
        </div>
    );
}

export default Sidebar;
