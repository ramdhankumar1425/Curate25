import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import { useProject } from "../context/ProjectProvider";
import Loader from "../components/Loader";

function ProfilePage() {
    const { isLoading, isAuthenticated, user, loginWithRedirect } = useAuth0();
    const { handleFetchProjectHistory, handleGetProject } = useProject();
    const [history, setHistory] = useState([]);

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            loginWithRedirect();
        } else if (!isLoading && isAuthenticated) {
            handleFetchProjectHistory()
                .then((data) => {
                    setHistory(data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [isLoading, isAuthenticated]);

    if (isLoading) {
        return <Loader />;
    }

    console.log("History:", history);

    return (
        <div className="w-full min-h-screen flex flex-col text-white bg-[url(/images/userhistory-bg.png)] bg-cover bg-center bg-black px-6 pb-10">
            {/* Header Section */}
            <Header />

            {/* Profile Section */}
            <div className="max-w-4xl mx-auto mt-10 p-8 bg-gray-900 bg-opacity-90 rounded-lg shadow-xl text-center">
                {isAuthenticated && user && (
                    <div className="flex flex-col items-center space-y-4">
                        <img
                            src={user.picture}
                            alt={user.name}
                            className="w-28 h-28 rounded-full border-4 border-gray-500 shadow-md"
                        />
                        <div>
                            <h2 className="text-3xl font-bold">{user.name}</h2>
                            <p className="text-gray-400 text-lg">
                                {user.email}
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* History Section */}
            <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-900 bg-opacity-90 rounded-lg shadow-xl">
                <h3 className="text-2xl font-semibold mb-6 border-b border-gray-600 pb-2">
                    Project History
                </h3>
                <ul className="space-y-4">
                    {history &&
                        history.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
                                onClick={() => handleGetProject(item.projectId)}
                            >
                                <span className="text-lg font-medium text-white w-1/4">
                                    {item.name}
                                </span>
                                <span className="text-gray-400 text-sm italic w-1/3">
                                    {item.prompt}
                                </span>
                                <span className="text-gray-300 text-sm font-light w-1/4">
                                    {item.lastUpdated}
                                </span>
                                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white text-sm font-medium w-1/6">
                                    Go to Build
                                </button>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default ProfilePage;
