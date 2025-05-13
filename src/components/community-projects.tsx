import Image from "next/image"
import Link from "next/link"
import { GitFork } from "lucide-react"

export function CommunityProjects() {
  const projects = [
    {
      id: "tetris",
      title: "Tetris",
      image: "/placeholder.svg?key=jhica",
      author: {
        avatar: "/diverse-avatars.png",
      },
      forks: "3.6K",
    },
    {
      id: "crop-studio",
      title: "Crop Studio Landing",
      image: "/placeholder.svg?key=x7g3i",
      author: {
        avatar: "/red-avatar.png",
      },
      forks: "4.0K",
    },
    {
      id: "dashboard",
      title: "Futuristic Dashboard",
      image: "/placeholder.svg?key=x200f",
      author: {
        avatar: "/abstract-avatar-green.png",
      },
      forks: "13.8K",
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">From the Community</h2>
          <p className="text-muted-foreground">Explore what the community is building with v0.</p>
        </div>
        <Link href="/browse" className="text-sm font-medium flex items-center">
          Browse All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="group">
            <Link href={`/project/${project.id}`} className="block">
              <div className="overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-border/80">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full">
                      <Image
                        src={project.author.avatar || "/placeholder.svg"}
                        alt="Author"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{project.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <GitFork className="mr-1 h-3 w-3" />
                        <span>{project.forks} Forks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
