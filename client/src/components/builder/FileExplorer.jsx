import React, { useState } from "react";

const tree = {
    data: {
        name: "Earth",
        type: "directory",
        children: [
            {
                name: "Asia",
                type: "directory",
                children: [
                    { name: "India", type: "file" },
                    { name: "China", type: "file" },
                    { name: "Japan", type: "file" },
                    { name: "South Korea", type: "file" },
                    { name: "U.A.E", type: "file" },
                    { name: "Jordan", type: "file" },
                ],
            },
            {
                name: "Americas",
                type: "directory",
                children: [
                    { name: "USA", type: "file" },
                    { name: "Canada", type: "file" },
                    { name: "Brazil", type: "file" },
                    { name: "Mexico", type: "file" },
                    { name: "Chile", type: "file" },
                ],
            },
            {
                name: "Europe",
                type: "directory",
                children: [
                    { name: "France", type: "file" },
                    { name: "United Kingdom", type: "file" },
                    { name: "Germany", type: "file" },
                    { name: "Russia", type: "file" },
                    { name: "Turkey", type: "file" },
                    { name: "Sweden", type: "file" },
                ],
            },
            {
                name: "Africa",
                type: "directory",
                children: [
                    { name: "Egypt", type: "file" },
                    { name: "South Africa", type: "file" },
                    { name: "Morocco", type: "file" },
                    { name: "Nigeria", type: "file" },
                    { name: "Ghana", type: "file" },
                    { name: "Ivory Coast", type: "file" },
                ],
            },
            { name: "Australia", type: "directory" },
            { name: "Antarctica", type: "directory" },
        ],
    },
};

function File({ name }) {
    return (
        <div className="ml-4 text-sm text-blue-600 cursor-pointer">
            📄 {name}
        </div>
    );
}

function Directory({ name, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="ml-2">
            <div
                className="flex items-center text-gray-800 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "📂" : "📁"} {name}
            </div>
            {isOpen && (
                <div className="ml-4">
                    {children &&
                        children.map((child, index) =>
                            child.type === "file" ? (
                                <File key={index} name={child.name} />
                            ) : (
                                <Directory
                                    key={index}
                                    name={child.name}
                                    children={child.children}
                                />
                            )
                        )}
                </div>
            )}
        </div>
    );
}

function FileExplorer() {
    return (
        <div className="w-80 h-full overflow-auto bg-gray-100 p-4">
            <Directory name={tree.data.name} children={tree.data.children} />
        </div>
    );
}

export default FileExplorer;
