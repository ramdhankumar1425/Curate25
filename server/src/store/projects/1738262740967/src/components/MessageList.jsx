import React from 'react';

const MessageList = ({ messages }) => {
    return (
        <div className="h-[400px] overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                    <div
                        className={`max-w-[70%] p-3 rounded-lg ${
                            message.isUser
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-800'
                        }`}
                    >
                        {message.text}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MessageList;