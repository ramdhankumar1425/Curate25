import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { ArrowUp } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
    const [prompt, setPrompt] = useState("");
    const navigate = useNavigate();
    const { loginWithRedirect, isAuthenticated, getAccessTokenSilently } =
        useAuth0();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isAuthenticated) {
            await loginWithRedirect();
            return;
        }

        try {
            const token = await getAccessTokenSilently();
            const serverURI = import.meta.env.VITE_SERVER_URI;
            if (!serverURI) {
                throw new Error(
                    "Server URI is not defined in the environment."
                );
            }

            const response = await axios.post(
                `${serverURI}/test`,
                { prompt },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log(response.data);
            setPrompt(""); // Clear the prompt
        } catch (error) {
            console.error("Error submitting prompt:", error);
        }
    };

    return (
        <section className="w-full flex-1 flex flex-col items-center pt-20">
            <img className="w-12" src="images/logo.png" alt="Logo" />

            <div className="flex flex-col items-center space-y-10 mt-10">
                <h1 className="text-6xl font-bold text-center">
                    Dream it. Type it. Use it.
                </h1>
                <p className="text-center text-lg font-inter">
                    Curate is your all-in-one tool to build and launch your next
                    website.
                </p>
            </div>

            <div className="w-1/2 flex justify-center mt-10 relative">
                {/* Enhanced textarea styling */}
                <textarea
                    onChange={(e) => setPrompt(e.target.value)}
                    value={prompt}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            handleSubmit(e);
                        }
                    }}
                    className="w-full rounded-lg p-6 bg-inherit border border-blue-500 shadow-2xl focus:ring-4 focus:ring-blue-600 text-lg font-semibold placeholder-gray-400 text-white resize-none transition-all duration-300"
                    rows={7}
                    placeholder="Tell us about your website..."
                />

                <button
                    className="absolute bottom-3 right-3 rounded-full p-3 bg-[#EDEEF0] text-[#1E1E1E] font-bold cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                    title="Submit"
                    onClick={handleSubmit}
                >
                    <ArrowUp className="scale-100" />
                </button>
            </div>
        </section>
    );
}

export default HeroSection;
