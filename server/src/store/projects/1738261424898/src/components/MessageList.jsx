import React, { useRef, useEffect } from 'react';
import Message from './Message';

const MessageList = ({ messages, currentUserId }) => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="h-[400px] overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
                <Message
                    key={message.id}
                    message={message}
                    isOwnMessage={message.userId === currentUserId}
                />
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default MessageList;