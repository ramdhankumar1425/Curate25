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
        }

        try {
            const token = await getAccessTokenSilently();
            console.log("Access Token:", token);

            const response = await axios.get(
                import.meta.env.VITE_SERVER_URI + "/test",
                {
                    data: {
                        prompt,
                    },
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log(response.data);
            setPrompt("");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="w-full flex-1 flex flex-col items-center pt-20">
            <img className="w-12" src="images/logo.png" alt="Logo" />

            <div className="flex flex-col items-center space-y-10 mt-10">
                <h1 className="text-6xl font-bold text-center">
                    Dream it. Type it. Use it.
                </h1>
                <p className="text-center text-lg font-inter ">
                    Curate is your all-in-one tool to build and launch your next
                    website.
                </p>
            </div>

            <div className="w-1/2 flex justify-center mt-10 relative">
                <textarea
                    onChange={(e) => setPrompt(e.target.value)}
                    value={prompt}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    className="w-full rounded-md p-6 bg-inherit border border-opacity-5 resize-none"
                    rows={7}
                    placeholder="Tell us about your website..."
                />

                <button
                    className="absolute bottom-3 right-3 rounded-full p-1 bg-[#EDEEF0] text-[#1E1E1E] cursor-pointer"
                    title="Submit"
                    onClick={handleSubmit}
                >
                    <ArrowUp className="scale-75" />
                </button>
            </div>
        </section>
    );
}

export default HeroSection;
