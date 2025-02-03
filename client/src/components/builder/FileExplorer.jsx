import React, { useState } from "react";
import { useProject } from "../../context/ProjectProvider";


function File({ name,content, onSelectFile }) {
    return (
        <div className="ml-2 mb-1 text-sm text-gray-400 cursor-pointer">
            <button
                onClick={() => onSelectFile(content)}
            >
            📄 {name}
            </button>
        </div>
    );
}

function Directory({ name, children, onSelectFile }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="ml-1">
            <div
                className="flex items-center text-white cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <img
                    src={
                        isOpen
                            ? "/public/images/Files.png"
                            : "/public/images/FilesD.png"
                    }
                
                    alt={isOpen ? "Open Folder" : "Closed Folder"}
                    className="w-7 h-7 mb-1"
                />
                {name}
            </div>
            {isOpen && (
                <div className="ml-2">
                    {children &&
                        children.map((child, index) =>
                            child.type === "file" ? (
                                <File key={index} name={child.name} content={child.content} onSelectFile={onSelectFile} />
                            ) : (
                                <Directory
                                    key={index}
                                    name={child.name}
                                    children={child.children}
                                    onSelectFile={onSelectFile}
                                />
                            )
                        )}
                </div>
            )}
        </div>
    );
}


function FileExplorer({ onSelectFile }) {
    const { project } = useProject();

    const tree = project.currCode;
    console.log(tree);

    return (
        <div className="w-80 h-full overflow-auto bg-black p-4">
            <Directory
                name={tree.name}
                children={tree.children}
                onSelectFile={onSelectFile}
            />
        </div>
    );
}


export default FileExplorer;
