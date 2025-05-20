import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Dashboard Analytics</h1>
          <p>Summary stats and charts go here.</p>
        </div>
      </div>
    </div>
  )
}
