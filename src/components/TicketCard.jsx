import React from 'react'

export default function TicketCard({ ticket, onAdd }) {
  return (
    <article className="bg-white rounded-lg shadow p-4 border border-gray-100">
      <div className="flex items-start justify-between">
        <h3 className="text-sm font-semibold text-gray-800">{ticket.title}</h3>
        <span className={`text-xs px-2 py-1 rounded-full ${
          ticket.priority.includes('HIGH') ? 'bg-red-100 text-red-700' :
          ticket.priority.includes('MEDIUM') ? 'bg-yellow-100 text-yellow-700' :
          'bg-green-100 text-green-700'
        }`}>{ticket.priority}</span>
      </div>

      <p className="mt-2 text-xs text-gray-600">{ticket.description}</p>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-xs text-gray-500">#{ticket.id} • {ticket.customer}</div>
        <div className="flex items-center gap-2">
          <button onClick={onAdd} className="text-xs px-3 py-1 bg-indigo-50 text-indigo-700 rounded-md border">Add</button>
          <div className="text-xs text-gray-400">{ticket.createdAt}</div>
        </div>
      </div>
    </article>
  )
}
