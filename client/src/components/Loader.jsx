import React from "react";
import { useProject } from "../context/ProjectProvider";
import { BounceLoader, ClipLoader, ClockLoader } from "react-spinners";

const Loader = () => {
    const { loading } = useProject();

    if (!loading) return null;

    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-30 flex flex-col justify-center items-center bg-gray-800 bg-opacity-[0.95]">
            {/* <BounceLoader /> */}
            {/* <ClipLoader className="block" color="white" /> */}
            <ClockLoader color="white" />
            <p className="text-white text-lg mt-5">
                Your website is cooking...
            </p>
        </div>
    );
};

export default Loader;
