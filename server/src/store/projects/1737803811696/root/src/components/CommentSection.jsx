import React, { useState } from 'react'

const CommentSection = () => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), text: newComment }])
      setNewComment('')
    }
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Comments</h3>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Add a comment..."
        />
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
          Post Comment
        </button>
      </form>
      <div className="space-y-4">
        {comments.map(comment => (
          <div key={comment.id} className="bg-gray-50 p-4 rounded">
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentSection