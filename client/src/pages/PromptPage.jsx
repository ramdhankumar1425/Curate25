import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ArrowUp } from "lucide-react";
import { useProject } from "../context/ProjectProvider";
import Header from "../components/Header";
import { MIN_PROMPT_LENGTH, MAX_PROMPT_LENGTH } from "../constants/constants";

function PromptPage() {
    const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();
    const { handleBuild } = useProject();
    const [prompt, setPrompt] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoading || !isAuthenticated) return;

        if (prompt.length < MIN_PROMPT_LENGTH) {
            alert(`Please enter at least ${MIN_PROMPT_LENGTH} characters.`);
            return;
        }

        await handleBuild(prompt);

        setPrompt("");
    };

    // to prevent the page from rendering before the user is authenticated
    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            loginWithRedirect();
        }
    }, [isLoading, isAuthenticated, loginWithRedirect]);

    return (
        <div className="w-full min-h-screen flex flex-col justify-between text-white bg-[url(/images/promptpage-bg.png)] bg-cover bg-center">
            {/* Header Section */}
            <Header />

            {/* Hero Section */}
            <section className="w-full flex-1 flex flex-col items-center pt-20">
                <img
                    className="w-12 aspect-square"
                    src="images/logo.png"
                    alt="Logo"
                />

                <div className="flex flex-col items-center space-y-10 mt-10">
                    <h1 className="text-6xl font-bold text-center">
                        Dream it. Type it. Use it.
                    </h1>
                    <p className="text-center text-lg font-inter">
                        Curate is your all-in-one tool to build and launch your
                        next website.
                    </p>
                </div>

                <div className="w-1/2 flex justify-center mt-10 relative">
                    {/* Enhanced textarea styling */}
                    <textarea
                        onChange={(e) => {
                            if (e.target.value.length <= MAX_PROMPT_LENGTH)
                                setPrompt(e.target.value);
                        }}
                        value={prompt}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                handleSubmit(e);
                            }
                        }}
                        className="w-full rounded-lg p-6 bg-inherit border border-blue-500 shadow-2xl focus:ring-4 focus:ring-blue-600 text-base font-thing placeholder:font-semibold font-semibold placeholder-gray-400 text-white resize-none transition-all duration-300"
                        rows={7}
                        placeholder="Tell us about your website..."
                    />

                    <button
                        className="absolute bottom-3 right-3 rounded-full p-1 bg-[#EDEEF0] hover:bg-gray-400 text-[#1E1E1E] font-bold cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                        title="Submit"
                        onClick={handleSubmit}
                    >
                        <ArrowUp className="scale-75" />
                    </button>

                    <span className="absolute left-2 bottom-2 text-xs text-gray-400">
                        {MAX_PROMPT_LENGTH - prompt.length}/{MAX_PROMPT_LENGTH}{" "}
                        left
                    </span>
                </div>
            </section>
        </div>
    );
}

export default PromptPage;
