import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (text) => {
        const newMessage = {
            id: Date.now(),
            text,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString()
        };
        
        setMessages([...messages, newMessage]);
        
        // Simulate received message
        setTimeout(() => {
            const receivedMessage = {
                id: Date.now() + 1,
                text: 'This is a response message',
                sender: 'other',
                timestamp: new Date().toLocaleTimeString()
            };
            setMessages(prev => [...prev, receivedMessage]);
        }, 1000);
    };

    return (
        <div className="max-w-2xl mx-auto p-4 h-screen flex flex-col">
            <div className="bg-white rounded-lg shadow-lg flex flex-col flex-1">
                <div className="p-4 border-b">
                    <h1 className="text-xl font-semibold">Chat Interface</h1>
                </div>
                <MessageList messages={messages} />
                <MessageInput onSendMessage={handleSendMessage} />
            </div>
        </div>
    );
};

export default ChatInterface;