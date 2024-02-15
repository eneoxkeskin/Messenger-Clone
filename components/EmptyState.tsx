import React from 'react'

function EmptyState() {
  return (
    <div className="flex h-full justify-center items-center bg-white">
      <div className="text-center flex flex-col items-center p-10 rounded-lg shadow-lg">
       
        <h3 className="text-2xl font-semibold text-black mb-2">No Conversation Selected</h3>
        <p className="text-black">
          Choose an existing chat on the left, or start a new conversation.
        </p>
      </div>
    </div>
  )
}

export default EmptyState