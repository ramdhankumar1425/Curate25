import React, { useEffect, useRef } from "react";

function Preview() {
    const iframeRef = useRef(null);

    useEffect(() => {
        fetch("http://localhost:5000/build-web", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then(({ bundle, files }) => {
                // Set the content of the iframe
                if (iframeRef.current) {
                    iframeRef.current.srcdoc = bundle;
                    console.log("Files:", files);

                    iframeRef.current.onload = () => {
                        const allNodes =
                            iframeRef.current.contentWindow.document.querySelectorAll(
                                "*"
                            );

                        allNodes.forEach((node) => {
                            node.onmouseover = (e) => {
                                // add a outline to node
                                e.target.style.outline = "1px solid red";
                            };
                            node.onmouseleave = (e) => {
                                e.target.style.outline = "";
                            };
                            node.addEventListener("click", (e) => {});
                        });
                    };
                }
            })
            .catch((err) => console.error("Error loading index1.html:", err));
        // fetch("/index.html")
        //     .then((response) => response.text())
        //     .then((html) => {
        //         // Set the content of the iframe
        //         if (iframeRef.current) {
        //             iframeRef.current.srcdoc = html;

        //             iframeRef.current.onload = () => {
        //                 const allNodes =
        //                     iframeRef.current.contentWindow.document.querySelectorAll(
        //                         "*"
        //                     );

        //                 allNodes.forEach((node) => {
        //                     node.onmouseover = (e) => {
        //                         // add a outline to node
        //                         e.target.style.outline = "1px solid red";
        //                     };
        //                     node.onmouseleave = (e) => {
        //                         e.target.style.outline = "";
        //                     };
        //                     node.addEventListener("click", (e) => {});
        //                 });
        //             };
        //         }
        //     })
        //     .catch((err) => console.error("Error loading index1.html:", err));
    }, []);

    return (
        <div className="h-screen flex-1">
            <iframe
                ref={iframeRef}
                className="w-full h-full bg-gray-800"
            ></iframe>
        </div>
    );
}

export default Preview;
