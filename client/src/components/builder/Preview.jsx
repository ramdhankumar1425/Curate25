import React, { useEffect, useRef, useState } from "react";
import { useProject } from "../../context/ProjectProvider";

function Preview() {
    const { project, isEditing } = useProject();
    const [url, setUrl] = useState("");
    const iframeRef = useRef(null);

    useEffect(() => {
        if (!project.current) return;
        console.log("Running useEffect");

        const iframe = iframeRef.current;

        if (!iframe) return;

        const blob = new Blob([project.current], { type: "text/html" });
        const url = URL.createObjectURL(blob);

        setUrl(url);

        if (isEditing) {
            iframe.onload = () => {
                const allNodes =
                    iframe.contentWindow.document.querySelectorAll("*");

                allNodes.forEach((node) => {
                    node.onmouseover = (e) => {
                        e.target.style.outline = "1px solid red";
                    };
                    node.onmouseleave = (e) => {
                        e.target.style.outline = "";
                    };
                    node.onclick = (e) => {
                        e.preventDefault(); // Prevent default actions (optional)
                        console.log("Clicked node:", e.target);
                    };
                });
            };
        }

        return () => {
            URL.revokeObjectURL(url);
        };
    }, [project.current]);

    return (
        <div className="h-50vh flex-1">
            <h1>iframe</h1>
            <iframe
                ref={iframeRef}
                src={url}
                id="project-iframe"
                className="w-full h-full bg-gray-800"
            ></iframe>
        </div>
    );
}

export default Preview;
