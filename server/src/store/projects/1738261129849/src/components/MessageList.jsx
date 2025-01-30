import React from 'react';

const MessageList = ({ messages }) => {
    return (
        <div className="h-[400px] overflow-y-auto p-4">
            {messages.map(message => (
                <div
                    key={message.id}
                    className={`flex ${message.isSent ? 'justify-end' : 'justify-start'} mb-4`}
                >
                    <div className={`max-w-[70%] rounded-lg p-3 ${
                        message.isSent 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-200 text-gray-800'
                    }`}>
                        <p>{message.text}</p>
                        <span className={`text-xs ${
                            message.isSent ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                            {message.timestamp}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MessageList;