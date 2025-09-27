import React from 'react'

export default function Banner({ inProgress, resolved }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="rounded-lg p-6 banner-gradient-1 text-white shadow">
        <div className="text-sm opacity-90">In-Progress</div>
        <div className="mt-6 text-4xl font-bold">{inProgress}</div>
      </div>

      <div className="rounded-lg p-6 banner-gradient-2 text-white shadow">
        <div className="text-sm opacity-90">Resolved</div>
        <div className="mt-6 text-4xl font-bold">{resolved}</div>
      </div>
    </div>
  )
}
