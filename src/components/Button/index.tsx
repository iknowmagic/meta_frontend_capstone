import React from 'react'

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="btn bg-yellow-400 text-black font-bold hover:bg-yellow-300 shadow-none transition">
      {children}
    </button>
  )
}
