import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { UserNav } from "@/components/auth/user-nav"
import Link from "next/link"
import { ProfileForm } from "@/components/auth/profile-form"

export default async function Profile() {
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
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <div className="max-w-2xl mx-auto">
          <ProfileForm user={session.user} profile={profile} />
        </div>
      </main>
    </div>
  )
}
