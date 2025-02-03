import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { ALLOWED_EDITS } from "../constants/constants";

const ProjectContext = createContext(null);

export const ProjectProvider = ({ children }) => {
    const navigate = useNavigate();
    const { getAccessTokenSilently } = useAuth0();

    const [project, setProject] = useState({
        id: "",
        name: "",
        currBundle: ``,
        currCode: {},
        history: [],
    });
    const [chats, setChats] = useState([]);

    const [mode, setMode] = useState("chatbot"); // can be "chatbot" or "code" or "preview"
    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [viewPort, setViewPort] = useState("desktop");

    const iframeRef = useRef(null);
    const selectedNodeRef = useRef(null);

    // main build function to send prompt to server
    const handleBuild = useCallback(
        async (prompt) => {
            try {
                setLoading(true);

                const token = await getAccessTokenSilently();
                const serverURI = import.meta.env.VITE_SERVER_URI;

                if (!serverURI) {
                    throw new Error(
                        "Server URI is not defined in the environment."
                    );
                }

                const response = await axios.post(
                    `${serverURI}/build`,
                    { prompt },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const { message, bundle, code, projectId } =
                    await response.data;

                console.log("message", message);

                setProject({
                    id: projectId,
                    currBundle: bundle,
                    currCode: code,
                    history: [],
                });

                setChats([{ role: "user", text: prompt }]);

                navigate("/builder");
            } catch (error) {
                console.error("Error submitting prompt:", error);
            } finally {
                setLoading(false);
            }
        },
        [getAccessTokenSilently, project]
    );

    // function to refine further using reprompt
    const handleRefine = useCallback(
        async (prompt) => {
            try {
                setLoading(true);

                const token = await getAccessTokenSilently();
                const serverURI = import.meta.env.VITE_SERVER_URI;

                if (!serverURI) {
                    throw new Error(
                        "Server URI is not defined in the environment."
                    );
                }

                const response = await axios.post(
                    `${serverURI}/refine`,
                    {
                        currProject: project.currCode,
                        prompt,
                        projectId: project.id,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const { message, bundle, code } = await response.data;

                console.log("message", message);

                setProject((prev) => ({
                    ...project,
                    currBundle: bundle,
                    currCode: code,
                    history: [...prev.history, prev.currCode],
                }));

                setChats((prev) => [...prev, { role: "user", text: prompt }]);
            } catch (error) {
                console.error("Error submitting prompt:", error);
            } finally {
                setLoading(false);
            }
        },
        [getAccessTokenSilently, project]
    );

    // function to edit the project using editor panel
    const handleEditing = useCallback(
        (property, value) => {
            const node = selectedNodeRef.current;
            if (!node || !property) return;

            const curateEditId = node.dataset.curateEditId;

            if (!curateEditId) {
                console.error("Element does not have a Curate Edit ID");
                return;
            }

            // to apply the change on the iframe
            switch (property) {
                case ALLOWED_EDITS.COLOR:
                    node.style.color = value;
                    break;
                case ALLOWED_EDITS.BACKGROUND_COLOR:
                    node.style.backgroundColor = value;
                    break;
                case ALLOWED_EDITS.MARGIN:
                    node.style.margin = value;
                    break;
                case ALLOWED_EDITS.PADDING:
                    node.style.padding = value;
                    break;
                case ALLOWED_EDITS.BORDER:
                    node.style.border = value;
                    break;
                case ALLOWED_EDITS.BORDER_RADIUS:
                    node.style.borderRadius = value;
                    break;
                case ALLOWED_EDITS.FONT_FAMILY:
                    node.style.fontFamily = value;
                    break;
                case ALLOWED_EDITS.FONT_SIZE:
                    node.style.fontSize = value;
                    break;
                case ALLOWED_EDITS.FONT_WEIGHT:
                    node.style.fontWeight = value;
                    break;
                case ALLOWED_EDITS.OPACITY:
                    node.style.opacity = value;
                    break;
                case ALLOWED_EDITS.WIDTH:
                    node.style.width = value;
                    break;
                case ALLOWED_EDITS.HEIGHT:
                    node.style.height = value;
                    break;
                case ALLOWED_EDITS.TEXT_ALIGN:
                    node.style.textAlign = value;
                    break;

                default:
                    break;
            }

            // update the index.css file in the project
            let indexCss = project.currCode?.children
                ?.find((child) => child.name === "src")
                ?.children?.find((child) => child.name === "index.css");

            if (!indexCss)
                indexCss = {
                    type: "file",
                    name: "index.css",
                    content: "",
                };

            const regex = new RegExp(
                `\\[data-curate-edit-id="${curateEditId}"\\] \\{([\\s\\S]*?)\\}`,
                "g"
            );

            // Check if the rule for the given ID exists
            const match = regex.exec(indexCss.content);

            if (match) {
                // If the rule exists, check if the property already exists
                const rule = match[0];
                const propertyRegex = new RegExp(`\\s*${property}:.*?;`, "g");

                if (propertyRegex.test(rule)) {
                    // If property exists, replace its value
                    indexCss.content = indexCss.content.replace(
                        propertyRegex,
                        `  ${property.toString()}: ${value};`
                    );
                } else {
                    // If property does not exist, add it to the rule
                    indexCss.content = indexCss.content.replace(
                        rule,
                        rule.replace(
                            "}",
                            `  ${property.toString()}: ${value};\n}`
                        )
                    );
                }
            } else {
                // If the rule doesn't exist, add it
                indexCss.content += `\n\n[data-curate-edit-id="${curateEditId}"] {\n  ${property.toString()}: ${value};\n}`;
            }

            setProject((prev) => ({
                ...prev,
                currCode: {
                    ...prev.currCode,
                    children: prev.currCode.children.map((child) =>
                        child.name === "src"
                            ? {
                                  ...child,
                                  children: child.children.map((child) =>
                                      child.name === "index.css"
                                          ? indexCss
                                          : child
                                  ),
                              }
                            : child
                    ),
                },
            }));
        },
        [project]
    );

    const handleSaveChanges = useCallback(async () => {
        try {
            setLoading(true);

            const token = await getAccessTokenSilently();
            const serverURI = import.meta.env.VITE_SERVER_URI;

            if (!serverURI) {
                throw new Error(
                    "Server URI is not defined in the environment."
                );
            }

            const response = await axios.post(
                `${serverURI}/update`,
                {
                    currProject: project.currCode,
                    projectId: project.id + "abcd",
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const { message, bundle } = await response.data;

            console.log("message", message);

            setProject((prev) => ({
                ...project,
                currBundle: bundle,
                history: [...prev.history, prev.currCode],
            }));
        } catch (error) {
            console.error("Error updating project:", error);
        } finally {
            setLoading(false);
        }
    }, [getAccessTokenSilently, project]);

    const handleDownload = useCallback(async () => {
        try {
            setLoading(true);

            const token = await getAccessTokenSilently();
            const serverURI = import.meta.env.VITE_SERVER_URI;

            if (!serverURI) {
                throw new Error(
                    "Server URI is not defined in the environment."
                );
            }

            const response = await axios.post(
                `${serverURI}/download`,
                {
                    project: project.currCode,
                    projectId: project.id,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    responseType: "blob",
                }
            );

            const blob = new Blob([response.data], { type: "application/zip" });

            // Create a download link
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "output.zip"); // Set the filename
            document.body.appendChild(link);
            link.click();
            link.remove();

            console.log("Download successful");
        } catch (error) {
            console.error("Error downloading project:", error);
        } finally {
            setLoading(false);
        }
    }, [getAccessTokenSilently, project]);

    const handleFetchProjectHistory = useCallback(async () => {
        try {
            setLoading(true);

            const token = await getAccessTokenSilently();
            const serverURI = import.meta.env.VITE_SERVER_URI;

            if (!serverURI) {
                throw new Error(
                    "Server URI is not defined in the environment."
                );
            }

            const response = await axios.get(`${serverURI}/history`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const { history, message } = await response.data;

            return history;
        } catch (error) {
            console.error("Error fetching project history:", error);
        } finally {
            setLoading(false);
        }
    }, [getAccessTokenSilently]);

    const handleGetProject = useCallback(
        async (projectId) => {
            try {
                setLoading(true);

                const token = await getAccessTokenSilently();
                const serverURI = import.meta.env.VITE_SERVER_URI;

                if (!serverURI) {
                    throw new Error(
                        "Server URI is not defined in the environment."
                    );
                }

                const response = await axios.post(
                    `${serverURI}/project`,
                    { projectId },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const { message, bundle, code } = await response.data;

                console.log("message", message);

                setProject({
                    id: projectId,
                    currBundle: bundle,
                    currCode: code,
                    history: [],
                });

                navigate("/builder");
            } catch (error) {
                console.error("Error submitting prompt:", error);
            } finally {
                setLoading(false);
            }
        },
        [getAccessTokenSilently, project]
    );

    // editing mode to highlight elements
    useEffect(() => {
        const iframe = iframeRef.current;

        if (!iframe) return;

        const handleMouseOver = (e) => {
            e.target.style.outline = "1px solid red";
        };
        const handleMouseLeave = (e) => {
            e.target.style.outline = "";
        };
        const handleClick = (e) => {
            e.preventDefault();
            selectedNodeRef.current = e.target;
        };

        if (isEditing) {
            const allNodes =
                iframe.contentWindow.document.querySelectorAll("*");

            allNodes.forEach((node) => {
                node.addEventListener("mouseover", handleMouseOver);
                node.addEventListener("mouseleave", handleMouseLeave);
                node.addEventListener("click", handleClick);
            });

            return () => {
                allNodes.forEach((node) => {
                    node.removeEventListener("mouseover", handleMouseOver);
                    node.removeEventListener("mouseleave", handleMouseLeave);
                    node.removeEventListener("click", handleClick);
                });
            };
        } else {
            return () => {}; // No cleanup needed when not editing
        }
    }, [isEditing]);

    const contextValue = useMemo(
        () => ({
            project,
            setProject,
            iframeRef,
            chats,
            isDragging,
            setIsDragging,
            isEditing,
            setIsEditing,
            loading,
            setLoading,
            handleBuild,
            handleEditing,
            mode,
            setMode,
            viewPort,
            setViewPort,
            handleRefine,
            handleDownload,
            handleSaveChanges,
            handleFetchProjectHistory,
            handleGetProject,
        }),
        [
            project,
            chats,
            isDragging,
            isEditing,
            loading,
            handleBuild,
            handleEditing,
            mode,
            viewPort,
            handleRefine,
            handleDownload,
            handleSaveChanges,
            handleFetchProjectHistory,
            handleGetProject,
        ]
    );

    return (
        <ProjectContext.Provider value={contextValue}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProject = () => {
    if (!ProjectContext) {
        throw new Error("useProject must be used within a ProjectProvider");
    }

    return useContext(ProjectContext);
};
