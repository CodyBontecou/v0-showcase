import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { UserNav } from "@/components/auth/user-nav"
import Link from "next/link"

export default async function Dashboard() {
  const supabase = createClient()

  // Check if user is authenticated
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/signin")
  }

  // Get user profile
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", session.user.id).single()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M6 3h12l4 6-10 13L2 9z" />
            </svg>
          </Link>
          <UserNav user={session.user} profile={profile} />
        </div>
      </header>
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Welcome, {profile?.full_name || session.user.email}</h2>
            <p className="text-muted-foreground">
              This is your personal dashboard. You can manage your projects and settings here.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Your Projects</h2>
            <p className="text-muted-foreground">
              You haven't created any projects yet. Start by creating your first project.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
            <p className="text-muted-foreground">Your recent activity will appear here.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
