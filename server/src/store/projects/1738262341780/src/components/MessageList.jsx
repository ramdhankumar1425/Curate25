import React from 'react';

const MessageList = ({ messages }) => {
    return (
        <div className="h-[400px] overflow-y-auto p-4">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className="mb-4 p-3 bg-blue-100 rounded-lg max-w-[80%] ml-auto"
                >
                    {message}
                </div>
            ))}
        </div>
    );
};

export default MessageList;