import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CommunityProjects } from "@/components/community-projects"
import Link from "next/link"
import { Search } from "lucide-react"

export default function BrowsePage() {
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
      <main className="flex-1 container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Browse Projects</h1>
          <p className="text-muted-foreground mb-6">Discover what the community is building with v0</p>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search projects..." className="pl-10" />
          </div>
        </div>
        <Tabs defaultValue="trending">
          <TabsList className="mb-6">
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="popular">Most Popular</TabsTrigger>
          </TabsList>
          <TabsContent value="trending">
            <CommunityProjects />
          </TabsContent>
          <TabsContent value="recent">
            <CommunityProjects />
          </TabsContent>
          <TabsContent value="popular">
            <CommunityProjects />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
