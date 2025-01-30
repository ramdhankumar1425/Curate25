import React from 'react'

const MessageList = ({ messages }) => {
  return (
    <div className="h-96 overflow-y-auto p-4 space-y-2">
      {messages.map((message) => (
        <div
          key={message.id}
          className="bg-blue-100 p-3 rounded-lg max-w-[80%] ml-auto"
        >
          <p className="text-gray-800">{message.text}</p>
        </div>
      ))}
    </div>
  )
}

export default MessageList