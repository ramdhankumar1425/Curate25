import React, { useState, useRef, useEffect } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const [userId] = useState(Math.random().toString(36).substring(7));
    const ws = useRef(null);

    useEffect(() => {
        ws.current = new WebSocket('wss://echo.websocket.org');
        
        ws.current.onmessage = (event) => {
            const message = JSON.parse(event.data);
            setMessages(prev => [...prev, message]);
        };

        return () => {
            if (ws.current) ws.current.close();
        };
    }, []);

    const sendMessage = (text) => {
        if (!text.trim()) return;
        
        const message = {
            id: Date.now(),
            text,
            userId,
            timestamp: new Date().toISOString()
        };

        if (ws.current) {
            ws.current.send(JSON.stringify(message));
        }

        setMessages(prev => [...prev, message]);
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 bg-blue-600">
                    <h1 className="text-white text-xl font-bold">Real-Time Chat</h1>
                </div>
                <MessageList messages={messages} currentUserId={userId} />
                <MessageInput onSendMessage={sendMessage} />
            </div>
        </div>
    );
};

export default ChatInterface;