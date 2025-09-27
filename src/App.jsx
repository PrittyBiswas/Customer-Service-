import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import TicketCard from './components/TicketCard'
import TaskStatus from './components/TaskStatus'
import Footer from './components/Footer'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const [customerTickets, setCustomerTickets] = useState([])
  const [taskStatus, setTaskStatus] = useState([])
  const [resolved, setResolved] = useState([])

  const inProgressCount = taskStatus.length
  const resolvedCount = resolved.length

  useEffect(() => {
    fetch('/Tickets.json')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then(data => setCustomerTickets(data))
      .catch(err => console.error('Error fetching tickets:', err))
  }, [])

  function addToTask(ticket) {
    const exists =
      taskStatus.find(t => t.id === ticket.id) || resolved.find(t => t.id === ticket.id)
    if (exists) {
      toast.info('This ticket is already in progress or resolved.')
      return
    }

    setTaskStatus(prev => [...prev, { ...ticket, status: 'In-Progress' }])
    toast.success(`Added to Task Status: ${ticket.title}`)
  }

  function completeTask(ticketId) {
    const task = taskStatus.find(t => t.id === ticketId)
    if (!task) return

    setTaskStatus(prev => prev.filter(t => t.id !== ticketId))
    setResolved(prev => [...prev, { ...task, status: 'Resolved' }])
    setCustomerTickets(prev => prev.filter(t => t.id !== ticketId))
    toast.success(`Marked Resolved: ${task.title}`)
  }

  function removeFromTask(ticketId) {
    const ticket = taskStatus.find(t => t.id === ticketId)
    if (!ticket) return

    setTaskStatus(prev => prev.filter(t => t.id !== ticketId))
    toast.info(`Removed from Task Status: ${ticket.title}`)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <Banner inProgress={inProgressCount} resolved={resolvedCount} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left section: Customer Tickets */}
          <section className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Customer Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {customerTickets.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} onAdd={() => addToTask(ticket)} />
              ))}
            </div>
          </section>

          {/* Right section: Task Status */}
          <aside>
            <TaskStatus
              tasks={taskStatus}
              onComplete={completeTask}
              onRemove={removeFromTask}
              resolved={resolved}
            />
          </aside>
        </div>
      </main>

      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  )
}
