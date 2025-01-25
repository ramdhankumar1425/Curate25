import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
    const { loginWithRedirect, logout, isLoading, isAuthenticated } =
        useAuth0();

    return (
        <header className="py-4 px-10 flex items-center justify-between">
            <div className="w-fit flex items-center space-x-10 align-baseline">
                <Link to="/">
                    <img
                        className="h-5"
                        src="images/logo-text.png"
                        alt="Curate logo"
                    />
                </Link>

                <ul className="flex items-center space-x-6 text-lg pt-1 font-inter font-[200]">
                    <li>Product</li>
                    <li>Resources</li>
                    <li>Contact</li>
                </ul>
            </div>
            {isLoading ? (
                <p>Loading...</p>
            ) : isAuthenticated ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <div className="flex items-center space-x-6 tracking-tight">
                    <button
                        className="px-5 py-1.5 rounded-md border border-[#467DBE] bg-[#125ABC]"
                        onClick={loginWithRedirect}
                    >
                        Sign up
                    </button>
                    <button
                        className="px-5 py-1.5 rounded-md border border-[#949494] bg-white bg-opacity-[12%]"
                        onClick={loginWithRedirect}
                    >
                        Login
                    </button>
                </div>
            )}
        </header>
    );
}

export default Header;
