import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-semibold">CS — Ticket System</h4>
          <p className="mt-2 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-2">Company</h5>
          <ul className="text-sm space-y-1">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-2">Services</h5>
          <ul className="text-sm space-y-1">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-2">Information</h5>
          <ul className="text-sm space-y-1">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-500">© 2025 CS — Ticket System. All rights reserved.</div>
    </footer>
  )
}
