import { Search } from "@/components/search"
import { ProjectSuggestions } from "@/components/project-suggestions"
import { CommunityProjects } from "@/components/community-projects"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
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
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col">
        <section className="py-24 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold mb-12 max-w-3xl">What can I help you ship?</h1>
          <div className="w-full max-w-3xl mx-auto">
            <Search />
          </div>
          <div className="mt-8">
            <ProjectSuggestions />
          </div>
        </section>
        <section className="container py-12">
          <CommunityProjects />
        </section>
      </main>
    </div>
  )
}
