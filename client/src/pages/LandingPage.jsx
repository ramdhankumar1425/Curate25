import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const [prompt, setPrompt] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setPrompt(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to generate website from prompt
        console.log("Generating website for prompt:", prompt);
        navigate("/build");
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-white">
            {/* Header Section */}
            <header className="bg-gray-800 py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-xl font-semibold px-2">LogoText</div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="flex-1 flex items-center justify-center py-16">
                <div className="text-center max-w-lg">
                    <h1 className="text-3xl font-bold mb-4">
                        Generate Your Website
                    </h1>
                    <p className="text-lg mb-6">
                        Enter a prompt to create a custom website.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            value={prompt}
                            onChange={handleChange}
                            className="w-full max-w-md h-32 px-4 py-2 border rounded-md mb-4 bg-gray-800 text-white border-gray-600 resize-none"
                            placeholder="Type your prompt here..."
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                        >
                            Generate Website
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
