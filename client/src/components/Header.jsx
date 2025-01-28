import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useState } from "react";
import { use } from "react";
import ContentLoader from "react-content-loader";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";

function Header() {
    const { loginWithRedirect, logout, isLoading, isAuthenticated, user } =
        useAuth0();

    return (
        <header className="w-full flex justify-between items-center py-4 px-6 sm:px-8 bg-transparent">
            {/* Logo and Navigation Links */}
            <Link to="/" className="flex items-center space-x-2">
                <img
                    src="/images/logo.png"
                    alt="Curate Logo"
                    className="w-8 h-8"
                />
                <div className="text-2xl font-bold text-white">Curate</div>
            </Link>
            {/* Authentication Buttons */}
            {isLoading ? (
                <ContentLoader
                    speed={2}
                    width={100}
                    height={32}
                    viewBox="0 0 100 32"
                    backgroundColor="#1d4ed8"
                    foregroundColor="#3b82f6"
                >
                    <circle cx="15" cy="16" r="15" />
                    <rect x="35" y="10" rx="3" ry="3" width="60" height="4" />
                    <rect x="40" y="20" rx="3" ry="3" width="60" height="4" />
                </ContentLoader>
            ) : isAuthenticated ? (
                <User />
            ) : (
                // <button
                //     className="bg-blue-600 text-white rounded-lg px-4 py-1 hover:bg-blue-400 transition duration-300"
                //     onClick={() => logout()}
                // >
                //     Logout
                // </button>
                <div className="flex space-x-4">
                    <button
                        className="text-white border border-gray-400 rounded-lg px-4 py-1 hover:bg-gray-200 hover:text-black transition duration-200"
                        onClick={loginWithRedirect}
                    >
                        Log In
                    </button>
                </div>
            )}
        </header>
    );
}

export default Header;

const User = () => {
    const { user, logout } = useAuth0();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="relative inline-block">
            <div
                className="flex items-center cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                <img
                    src={user.picture}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full mr-2"
                />
                <span className="font-medium">{user.name}</span>
            </div>
            {dropdownOpen && (
                <div className="absolute right-0 mt-2 overflow-hidden shadow-lg z-10">
                    <button
                        onClick={() => logout()}
                        className="block w-full px-4 py-2 rounded-lg text-left bg-blue-600 hover:bg-blue-700 duration-150 border border-blue-500 text-gray-100"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};
