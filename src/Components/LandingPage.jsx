import React from 'react'

function LandingPage() {
  return (
    <div className="text-center px-4 py-48  ">
      <h1 className="text-9xl font-bold mb-4 text-white">
        Start <span className="text-red-500/75">Blogging</span><br />
        Now
      </h1>
      <p className="text-gray-600 mb-6 max-w-xl mx-auto">
        Create unique blogs that leaves a lasting impression.
      </p>
      <div className="flex justify-center items-center gap-2">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-2xl">Start blogging</button>
      </div>
    </div>

  )
}

export default LandingPage