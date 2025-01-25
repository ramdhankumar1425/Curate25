import React from 'react'

const Account = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Account</h1>
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input type="email" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Password</label>
              <input type="password" className="w-full p-2 border rounded" />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Account