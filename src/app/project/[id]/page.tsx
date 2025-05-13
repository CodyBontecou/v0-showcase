'use client'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CodeBlock } from '@/components/code-block'
import Image from 'next/image'
import Link from 'next/link'
import { GitFork, Heart, Share2 } from 'lucide-react'

interface ProjectPageProps {
    params: Promise<{ id: string }>
}

export default function ProjectPage({ params }: ProjectPageProps) {
    // This would normally come from an API or database
    const projects = {
        tetris: {
            title: 'Tetris',
            description: 'A classic Tetris game built with React and Next.js',
            image: '/placeholder.svg?key=af0p3',
            author: {
                name: 'John Doe',
                avatar: '/diverse-avatars.png',
            },
            forks: '3.6K',
            likes: '5.2K',
            code: `import React, { useState, useEffect } from 'react';

const Tetris = () => {
  const [board, setBoard] = useState([]);
  const [score, setScore] = useState(0);

  // Game logic would go here

  return (
    <div className="tetris-container">
      <div className="game-info">
        <h2>Score: {score}</h2>
      </div>
      <div className="game-board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={\`cell \${cell ? 'filled' : ''}\`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tetris;`,
        },
        'crop-studio': {
            title: 'Crop Studio Landing',
            description:
                'A sleek landing page for a privacy-focused photo editing tool',
            image: '/placeholder.svg?key=xe9wr',
            author: {
                name: 'Jane Smith',
                avatar: '/red-avatar.png',
            },
            forks: '4.0K',
            likes: '6.7K',
            code: `import React from 'react';

export default function LandingPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="logo">Crop Studio</div>
        <nav className="flex gap-6">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <button className="bg-purple-600 px-4 py-2 rounded">Sign Up</button>
        </nav>
      </header>

      <main>
        <section className="hero container mx-auto py-24 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Protect Your Privacy, Share What Matters
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Crop Studio lets you edit photos with privacy in mind, removing sensitive data before sharing.
          </p>
          <button className="bg-purple-600 px-6 py-3 rounded-lg text-lg">
            Try For Free
          </button>
        </section>
      </main>
    </div>
  );
}`,
        },
        dashboard: {
            title: 'Futuristic Dashboard',
            description:
                'A modern dashboard with dark mode and interactive charts',
            image: '/placeholder.svg?key=zknau',
            author: {
                name: 'Alex Johnson',
                avatar: '/abstract-avatar-green.png',
            },
            forks: '13.8K',
            likes: '21.5K',
            code: `import React from 'react';
import { LineChart, BarChart } from 'recharts';

export default function Dashboard() {
  const performanceData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">System Overview</h1>
        <div className="flex gap-4">
          <button>Notifications</button>
          <button>Settings</button>
          <button>Profile</button>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2>CPU Usage</h2>
          <div className="text-3xl font-bold">45%</div>
          {/* Chart would go here */}
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2>Memory Usage</h2>
          <div className="text-3xl font-bold">60%</div>
          {/* Chart would go here */}
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2>Disk Usage</h2>
          <div className="text-3xl font-bold">30%</div>
          {/* Chart would go here */}
        </div>
      </div>
    </div>
  );
}`,
        },
    }

    const project = projects[params.id]

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">
                        Project not found
                    </h1>
                    <p className="mb-6">
                        The project you're looking for doesn't exist or has been
                        removed.
                    </p>
                    <Button asChild>
                        <Link href="/">Go Home</Link>
                    </Button>
                </div>
            </div>
        )
    }

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
                    <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                    <p className="text-muted-foreground mb-6">
                        {project.description}
                    </p>
                    <div className="flex items-center gap-6 mb-6">
                        <div className="flex items-center gap-2">
                            <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                <Image
                                    src={
                                        project.author.avatar ||
                                        '/placeholder.svg'
                                    }
                                    alt={project.author.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span>{project.author.name}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Button
                                variant="outline"
                                size="sm"
                                className="gap-1"
                            >
                                <Heart className="h-4 w-4" />
                                {project.likes}
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                className="gap-1"
                            >
                                <GitFork className="h-4 w-4" />
                                {project.forks}
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                className="gap-1"
                            >
                                <Share2 className="h-4 w-4" />
                                Share
                            </Button>
                        </div>
                    </div>
                </div>
                <Tabs defaultValue="preview">
                    <TabsList className="mb-6">
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                    <TabsContent
                        value="preview"
                        className="rounded-lg overflow-hidden border border-border"
                    >
                        <div className="relative aspect-video w-full">
                            <Image
                                src={project.image || '/placeholder.svg'}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </TabsContent>
                    <TabsContent value="code">
                        <CodeBlock code={project.code} language="jsx" />
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}
