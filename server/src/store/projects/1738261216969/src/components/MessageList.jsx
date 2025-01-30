import React from 'react';
import MessageItem from './MessageItem';

const MessageList = ({ messages }) => {
    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
                <MessageItem key={message.id} message={message} />
            ))}
        </div>
    );
};

export default MessageList;