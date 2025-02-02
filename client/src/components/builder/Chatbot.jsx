import React, { useState } from "react";
import { Mic } from "lucide-react";
import { useProject } from "../../context/ProjectProvider";
import { useVoice } from "../../hooks/useVoice";

function Chatbot() {
    const { chats, handleRefine } = useProject();
    const [prompt, setPrompt] = useState("");

    const handleSend = async () => {
        if (!prompt.trim()) return;

        await handleRefine(prompt);

        setPrompt("");
    };

    return (
        <div className="w-96 h-full">
            <div className="flex flex-col h-full max-h-full">
                {/* <div className="flex justify-center p-3">
                    <img
                        src="/public/logo/AI.png"
                        alt="AI Logo"
                        className="w-6 h-6"
                    />
                    <p className="px-1 text-xl">AI ChatBot</p>
                </div> */}

                <div className="flex-1 pt-10 px-2.5 overflow-y-auto min-h-0 noscroll">
                    {chats.map((chat, index) => (
                        <div
                            key={index}
                            className={`flex mb-4 ${
                                chat.role === "user"
                                    ? "justify-end"
                                    : "justify-start"
                            } items-start`}
                        >
                            {chat.role === "bot" && (
                                <div className="mr-3 w-8 h-8 rounded-full flex items-center justify-center">
                                    <img
                                        src="/images/logo.png"
                                        alt="Curate Logo"
                                        className="w-6 h-6"
                                    />
                                </div>
                            )}
                            <div
                                className={`max-w-[75%] p-3 rounded-lg break-words whitespace-normal ${
                                    chat.role === "user"
                                        ? "bg-[#18181A] text-gray-400"
                                        : "bg-[#204294] text-white"
                                }`}
                            >
                                {chat.text}
                            </div>
                            {chat.role === "user" && (
                                <div className="ml-3 w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
                                    👧
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-auto flex gap-1 items-end p-2">
                    <textarea
                        ref={(textarea) => {
                            if (textarea) {
                                textarea.scrollTop = textarea.scrollHeight;
                            }
                        }}
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onInput={(e) => {
                            e.target.style.height = "auto";
                            e.target.style.height = `${Math.min(
                                e.target.scrollHeight,
                                96
                            )}px`;
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                handleSend();
                            }
                        }}
                        rows="1"
                        className="noscroll outline-none flex-1 p-2 bg-[#18181A] rounded-3xl text-xm font-extralight font-satoshi resize-none overflow-y-auto max-h-[96px] text-gray-300 placeholder-gray-500"
                        placeholder="Need some adjustments?"
                    />
                    <button
                        onClick={() => useVoice(setPrompt)}
                        className="p-2 w-10 h-10 rounded-full bg-blue-500 outline-none"
                    >
                        <Mic className="scale-95" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;
