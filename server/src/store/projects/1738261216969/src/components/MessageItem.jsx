import React from 'react';

const MessageItem = ({ message }) => {
    const isUser = message.sender === 'user';
    
    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] px-4 py-2 rounded-lg ${
                isUser ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}>
                <p>{message.text}</p>
                <span className="text-xs opacity-75">{message.timestamp}</span>
            </div>
        </div>
    );
};

export default MessageItem;