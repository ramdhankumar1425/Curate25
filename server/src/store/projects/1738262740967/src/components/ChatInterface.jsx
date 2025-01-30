import React, { useState } from 'react';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (text) => {
        if (text.trim()) {
            setMessages([...messages, { text, isUser: true }]);
            simulateResponse();
        }
    };

    const simulateResponse = () => {
        setTimeout(() => {
            setMessages(prev => [...prev, {
                text: "Thanks for your message!",
                isUser: false
            }]);
        }, 1000);
    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 bg-blue-600">
                <h1 className="text-white text-xl font-bold">Chat Interface</h1>
            </div>
            <MessageList messages={messages} />
            <MessageInput onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChatInterface;