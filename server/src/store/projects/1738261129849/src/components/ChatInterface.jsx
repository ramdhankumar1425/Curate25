import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (text) => {
        const newMessage = {
            id: Date.now(),
            text,
            timestamp: new Date().toLocaleTimeString(),
            isSent: true
        };
        setMessages([...messages, newMessage]);
        
        // Simulate received message
        setTimeout(() => {
            const receivedMessage = {
                id: Date.now() + 1,
                text: 'Thanks for your message!',
                timestamp: new Date().toLocaleTimeString(),
                isSent: false
            };
            setMessages(prevMessages => [...prevMessages, receivedMessage]);
        }, 1000);
    };

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg">
                <div className="p-4 border-b border-gray-200">
                    <h1 className="text-xl font-semibold text-gray-800">Chat Interface</h1>
                </div>
                <MessageList messages={messages} />
                <MessageInput onSendMessage={handleSendMessage} />
            </div>
        </div>
    );
};

export default ChatInterface;