import React from 'react';

const MessageBubble = ({ text, sender }) => {
    const isUser = sender === 'user';
    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] rounded-lg p-3 ${
                isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}>
                <p className="text-sm">{text}</p>
            </div>
        </div>
    );
};

export default MessageBubble;