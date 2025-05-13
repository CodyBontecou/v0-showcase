"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Share2, Paperclip, ArrowUp } from "lucide-react"

export function Search() {
  const [query, setQuery] = useState("")
  const [projectSelected, setProjectSelected] = useState(false)

  return (
    <div className="relative w-full">
      <div className="relative rounded-lg border border-input bg-background">
        <Input
          className="h-14 px-4 py-6 text-base rounded-lg border-0 shadow-none focus-visible:ring-0"
          placeholder="Ask v0 to build..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Share2 className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-2">
                <h3 className="font-medium">Share your prompt</h3>
                <p className="text-sm text-muted-foreground">Share your prompt with others to collaborate</p>
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Paperclip className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-2">
                <h3 className="font-medium">Attach files</h3>
                <p className="text-sm text-muted-foreground">Upload images or other files to include in your prompt</p>
              </div>
            </PopoverContent>
          </Popover>
          <Button size="icon" className="h-8 w-8">
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="mt-2 flex items-center text-sm text-muted-foreground">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="h-7 gap-1 text-xs">
              {projectSelected ? "Project selected" : "No project selected"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-0">
            <div className="p-2">
              <div className="text-sm font-medium mb-2">Select a project</div>
              <div className="space-y-1">
                {["Personal Website", "Dashboard UI", "E-commerce Store", "Blog Template"].map((project) => (
                  <Button
                    key={project}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-left"
                    onClick={() => {
                      setProjectSelected(true)
                      setQuery(`Build a ${project.toLowerCase()}`)
                    }}
                  >
                    {project}
                  </Button>
                ))}
              </div>
              <div className="border-t mt-2 pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-left text-muted-foreground"
                  onClick={() => setProjectSelected(false)}
                >
                  Clear selection
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
