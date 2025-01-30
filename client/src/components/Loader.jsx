import React from "react";
import { useProject } from "../context/ProjectProvider";
import { BounceLoader } from "react-spinners";

const Loader = () => {
    const { loading } = useProject();

    if (!loading) return null;

    return (
        <div className="absolute top-0 left-0 w-screen h-screen z-30 flex justify-center items-center bg-gray-800 bg-opacity-90">
            <BounceLoader color="white" />
        </div>
    );
};

export default Loader;
