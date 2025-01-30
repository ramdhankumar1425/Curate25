import React from 'react';

const Message = ({ message, isOwnMessage }) => {
    return (
        <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] rounded-lg px-4 py-2 ${
                isOwnMessage ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}>
                <p className="break-words">{message.text}</p>
                <span className={`text-xs ${isOwnMessage ? 'text-blue-100' : 'text-gray-500'}`}>
                    {new Date(message.timestamp).toLocaleTimeString()}
                </span>
            </div>
        </div>
    );
};

export default Message;