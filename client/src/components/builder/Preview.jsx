import React, { useEffect, useRef, useState } from "react";
import { useProject } from "../../context/ProjectProvider";

function Preview() {
    const { project, iframeRef, viewPort, isDragging } = useProject();
    const [url, setUrl] = useState("");
    const [isResizing, setIsResizing] = useState(false);
    const resizeRef = useRef({ initialX: 0, initialWidth: 0 });

    const onMouseDown = (e) => {
        if (!iframeRef.current) return;
        setIsResizing(true);

        resizeRef.current = {
            initialX: e.clientX,
            initialWidth: iframeRef.current.clientWidth,
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
        if (!isResizing || !iframeRef.current) return;

        const { initialX, initialWidth } = resizeRef.current;
        let newWidth = initialWidth + (e.clientX - initialX);

        // Prevent the width from becoming too small
        if (newWidth < 200) newWidth = 200;

        iframeRef.current.style.width = `${newWidth}px`;
    };

    const onMouseUp = () => {
        setIsResizing(false);

        // Remove global event listeners
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
    };

    // Update the iframe width when the viewport changes
    useEffect(() => {
        if (!iframeRef.current) return;

        if (viewPort === "desktop") iframeRef.current.style.width = "100%";
        else if (viewPort === "tablet") iframeRef.current.style.width = "768px";
        else if (viewPort === "mobile") iframeRef.current.style.width = "375px";
    }, [viewPort]);

    // Update the iframe URL when the project changes
    useEffect(() => {
        if (!project.currBundle) return;

        const iframe = iframeRef.current;
        if (!iframe) return;

        const blob = new Blob([project.currBundle], { type: "text/html" });
        const newUrl = URL.createObjectURL(blob);

        setUrl(newUrl);

        return () => {
            URL.revokeObjectURL(newUrl);
        };
    }, [project.currBundle]);

    return (
        <div className="h-full flex items-center justify-center relative flex-1">
            <span
                className="w-6 h-full flex items-center justify-center cursor-col-resize bg-gray-900 hover:bg-gray-800 border-l border-gray-700"
                onMouseDown={onMouseDown}
            >
                ||
            </span>
            <iframe
                ref={iframeRef}
                src={url}
                id="project-iframe"
                className={`w-full h-full bg-gray-950 ${
                    isDragging ? "pointer-events-none" : ""
                }`}
            ></iframe>
            <span
                className="w-6 h-full flex items-center justify-center cursor-col-resize bg-gray-900 hover:bg-gray-800 border-r border-gray-700"
                onMouseDown={onMouseDown}
            >
                ||
            </span>
        </div>
    );
}

export default Preview;
