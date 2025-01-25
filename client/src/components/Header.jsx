import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
    const { loginWithRedirect, logout, isLoading, isAuthenticated } = useAuth0();

    return (
        <header className="w-full flex justify-between items-center py-4 px-8 bg-transparent">
            {/* Logo and Navigation Links */}
            <div className="flex items-center space-x-6">
                <Link to="/" className="flex items-center space-x-2">
                    <img src="/images/logo.png" alt="Curate Logo" className="w-8 h-8" />
                    <div className="text-2xl font-bold text-white">Curate</div>
                </Link>
                <nav className="flex space-x-6 text-lg font-light">
                    <Link to="#" className="text-white hover:text-blue-400 transition duration-300">
                        Product
                    </Link>
                    <Link to="#" className="text-white hover:text-blue-400 transition duration-300">
                        Resources
                    </Link>
                    <Link to="#" className="text-white hover:text-blue-400 transition duration-300">
                        Contact
                    </Link>
                </nav>
            </div>

            {/* Authentication Buttons */}
            {isLoading ? (
                <p className="text-white">Loading...</p>
            ) : isAuthenticated ? (
                <button
                    className="bg-blue-600 text-white rounded-lg px-4 py-1 hover:bg-blue-400 transition duration-300"
                    onClick={() => logout()}
                >
                    Logout
                </button>
            ) : (
                <div className="flex space-x-4">
                    <button
                        className="bg-blue-600 text-white rounded-lg px-4 py-1 hover:bg-blue-400 transition duration-300"
                        onClick={loginWithRedirect}
                    >
                        Sign Up
                    </button>
                    <button
                        className="text-white border border-white rounded-lg px-4 py-1 hover:bg-white hover:text-black transition duration-300"
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
