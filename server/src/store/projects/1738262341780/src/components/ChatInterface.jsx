import React, { useState } from 'react';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message) => {
        if (message.trim()) {
            setMessages([...messages, message]);
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md">
            <MessageList messages={messages} />
            <MessageInput onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChatInterface;