import React, { useState } from 'react';

const InputField = ({ onSend }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSend(message);
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit} className="border-t p-4">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="Type your message..."
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Send
                </button>
            </div>
        </form>
    );
};

export default InputField;