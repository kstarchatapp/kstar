import { useUser } from '@/components/AuthProvider'

export default function DashboardPage() {
  const { user } = useUser()
  return (
    <main className="p-10">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      {user ? <p>Welcome, {user.email}!</p> : <p>Please login to continue.</p>}
    </main>
  )
}
