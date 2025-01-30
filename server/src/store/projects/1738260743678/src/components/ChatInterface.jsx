import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (text) => {
        const newMessage = {
            id: Date.now(),
            text,
            user: 'User',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop'
        };
        setMessages([...messages, newMessage]);
    };

    return (
        <div className="max-w-2xl mx-auto p-4 h-screen flex flex-col">
            <div className="bg-white rounded-lg shadow-lg p-4 flex-1 flex flex-col">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Chat Room</h1>
                <MessageList messages={messages} />
                <MessageInput onSendMessage={handleSendMessage} />
            </div>
        </div>
    );
};

export default ChatInterface;