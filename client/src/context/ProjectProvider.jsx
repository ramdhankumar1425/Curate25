import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

const ProjectContext = createContext(null);

export const ProjectProvider = ({ children }) => {
    const [project, setProject] = useState({
        id: "",
        name: "",
        current: null,
        history: [],
    });
    const iframeRef = useRef(null);
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(false);

    const [isDragging, setIsDragging] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const contextValue = useMemo(
        () => ({
            chats,
            project,
            isDragging,
            setProject,
            loading,
            setLoading,
            isEditing,
        }),
        [chats, project, isDragging, loading, isEditing]
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
