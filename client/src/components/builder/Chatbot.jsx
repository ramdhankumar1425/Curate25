import  { useState, useEffect, useCallback } from "react";
import { useProject } from "../../context/ProjectProvider";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Chatbot() {
    const { chats, handleRefine } = useProject();
    const [prompt, setPrompt] = useState("");
    const { transcript, listening, resetTranscript } = useSpeechRecognition();



    // const handleSend = async () => {
    //     if(!prompt.trim()) return;

    //     await handleRefine(prompt);
    //     setPrompt("");
        
    // };

    const handleSend = useCallback(async () => {
        if (prompt.trim()){

        await handleRefine(prompt);

        setPrompt("");
        resetTranscript();
        }
    }, [prompt, handleRefine, resetTranscript]);


    const toggleSpeechRecognition = () => {
        if (listening) {
            SpeechRecognition.stopListening(); // Stop the mic if it's already listening
            //console.log("not listening");
        } else {
            SpeechRecognition.startListening({ continuous: true, language: "en-US" }); // Start the mic
            //console.log("listening");
        }
    };
    
    useEffect(() => {
        if (listening) {
            setPrompt(transcript.trim());
        }
    }, [transcript, listening]);


    useEffect(() => {
        // Add a global key listener for Enter
        const handleGlobalKeyPress = (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                if(listening){
                    SpeechRecognition.stopListening();
                }
                e.preventDefault();
                e.target.style.height = "auto";
                handleSend(); // Call the send function
                
            }
        };


        window.addEventListener("keydown", handleGlobalKeyPress);

        return () => {
            window.removeEventListener("keydown", handleGlobalKeyPress);
        };
    }, [handleSend, listening]);



    return (
        <div className="w-96 h-full">
            <div className="flex flex-col h-full max-h-full">
                <div className="flex justify-center p-3">
                    <img
                        src="/images/AI.png"
                        alt="AI Logo"
                        className="w-6 h-6"
                    />
                    <p className="px-1 text-xl">AI ChatBot</p>
                </div>

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
                                        src="/images/ChatReply.png"
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
            onClick={toggleSpeechRecognition}
            className="p-2 rounded-r outline-none"
        >
            <div className="image-wrapper" style={{ position: 'relative', display: 'inline-block' }}>
                <img 
                    src={listening ? "/images/AI.png" : "/images/voice.png"}
                    alt="mic"
                    className="w-10"
                />
                {listening && <div className="moving-border"></div>}
            </div>
        </button>

                </div>
            </div>
        </div>
    );
}

export default Chatbot;
