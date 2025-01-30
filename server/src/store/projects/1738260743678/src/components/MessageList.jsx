import React from 'react';

const MessageList = ({ messages }) => {
    return (
        <div className="flex-1 overflow-y-auto mb-4">
            {messages.map((message) => (
                <div key={message.id} className="flex items-start mb-4">
                    <img
                        src={message.avatar}
                        alt={message.user}
                        className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                        <div className="font-semibold text-gray-800">{message.user}</div>
                        <div className="bg-blue-100 rounded-lg p-3 text-gray-700">
                            {message.text}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MessageList;