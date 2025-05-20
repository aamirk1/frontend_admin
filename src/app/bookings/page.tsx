import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

export default function BookingsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Bookings</h1>
          <p>Track customer bookings here.</p>
        </div>
      </div>
    </div>
  )
}
