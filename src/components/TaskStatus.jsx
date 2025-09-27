import React from 'react'

export default function TaskStatus({ tasks, onComplete, onRemove, resolved }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-100 sticky top-6">
      <h4 className="text-md font-semibold text-gray-700">Task Status</h4>
      <p className="text-xs text-gray-500 mt-1">Select a ticket to add to Task Status</p>

      <div className="mt-4 space-y-3">
        {tasks.length === 0 && (
          <div className="text-sm text-gray-400">No tasks in progress.</div>
        )}

        {tasks.map(t => (
          <div key={t.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-md border">
            <div className="text-sm">
              <div className="font-medium">{t.title}</div>
              <div className="text-xs text-gray-500">#{t.id} • {t.customer}</div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => onComplete(t.id)} className="px-3 py-1 text-sm bg-green-600 text-white rounded-md">Complete</button>
              <button onClick={() => onRemove(t.id)} className="px-2 py-1 text-sm bg-red-50 text-red-700 rounded-md">Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h5 className="text-sm font-semibold">Resolved</h5>
        <div className="mt-2 space-y-2 max-h-48 overflow-auto">
          {resolved.length === 0 && <p className="text-xs text-gray-400">No resolved tasks yet.</p>}
          {resolved.map(t => (
            <div key={t.id} className="text-xs bg-green-50 border border-green-200 rounded p-2">{t.title}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
