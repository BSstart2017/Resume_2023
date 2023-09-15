'use client'

import { useEffect } from 'react'

type PropsType = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({error, reset}: PropsType) {
  
  useEffect(() => {
    console.error(error)
  }, [error])
  
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-red-200 p-4 rounded-lg shadow-md text-red-800">
        <h2 className="text-xl font-semibold mb-2">Oops! Something went wrong</h2>
        <p className="text-sm mb-4">{error.message}</p>
        <button
          onClick={reset}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}