import React, { useEffect, useRef } from "react";

function TestPage() {
    const dragBtnRef = useRef(null);
    const parentRef = useRef(null);

    useEffect(() => {
        const dragBtn = dragBtnRef.current;
        const parent = parentRef.current;

        let offsetX = 0,
            offsetY = 0; // Mouse position relative to the element
        let isDragging = false;

        const onMouseDown = (e) => {
            e.preventDefault();
            isDragging = true;

            // Get the initial position of the button relative to the mouse
            const rect = dragBtn.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        };

        const onMouseMove = (e) => {
            if (!isDragging) return;

            const parentRect = parent.getBoundingClientRect();

            // Calculate new position
            let newX = e.clientX - offsetX - parentRect.left;
            let newY = e.clientY - offsetY - parentRect.top;

            // Apply constraints
            newX = Math.max(
                0,
                Math.min(newX, parentRect.width - dragBtn.offsetWidth)
            );
            newY = Math.max(
                0,
                Math.min(newY, parentRect.height - dragBtn.offsetHeight)
            );

            dragBtn.style.left = `${newX}px`;
            dragBtn.style.top = `${newY}px`;
        };

        const onMouseUp = () => {
            isDragging = false;
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };

        dragBtn.addEventListener("mousedown", onMouseDown);

        return () => {
            dragBtn.removeEventListener("mousedown", onMouseDown);
        };
    }, []);

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <div
                ref={parentRef}
                className="relative w-1/2 h-1/2 bg-gray-800 flex items-center justify-center"
            >
                <div
                    ref={dragBtnRef}
                    className="absolute p-4 bg-red-500 cursor-pointer"
                >
                    Drag me
                </div>
            </div>
        </div>
    );
}

export default TestPage;
