import React from 'react'

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">CS — Ticket System</div>

        <nav className="hidden md:flex items-center space-x-6">
          <a className="text-sm text-gray-600 hover:text-gray-900">Home</a>
          <a className="text-sm text-gray-600 hover:text-gray-900">FAQ</a>
          <a className="text-sm text-gray-600 hover:text-gray-900">Changelog</a>
          <a className="text-sm text-gray-600 hover:text-gray-900">Blog</a>
          <a className="text-sm text-gray-600 hover:text-gray-900">Download</a>
          <a className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
          <button className="ml-4 px-4 py-2 bg-purple-600 text-white rounded-md text-sm">+ New Ticket</button>
        </nav>

        <div className="md:hidden">
          <button className="px-3 py-2 bg-purple-600 text-white rounded-md text-sm">+ New</button>
        </div>
      </div>
    </header>
  )
}
