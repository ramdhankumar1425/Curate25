import React, { useState, useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble';
import InputField from './InputField';

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const chatEndRef = useRef(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (text) => {
        if (text.trim()) {
            setMessages([...messages, 
                { text, sender: 'user' },
                { text: 'This is a bot response', sender: 'bot' }
            ]);
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg h-[80vh] flex flex-col">
            <div className="bg-blue-600 p-4 rounded-t-lg">
                <h1 className="text-white text-xl font-semibold">Chat Interface</h1>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <MessageBubble key={index} {...message} />
                ))}
                <div ref={chatEndRef} />
            </div>
            <InputField onSend={handleSendMessage} />
        </div>
    );
};

export default ChatInterface;