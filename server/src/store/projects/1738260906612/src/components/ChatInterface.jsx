import React, { useState } from 'react'
import MessageList from './MessageList'
import MessageInput from './MessageInput'

const ChatInterface = () => {
  const [messages, setMessages] = useState([])

  const handleSendMessage = (message) => {
    if (message.trim()) {
      setMessages([...messages, { id: Date.now(), text: message }])
    }
  }

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Chat Interface</h2>
      </div>
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  )
}

export default ChatInterface