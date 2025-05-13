import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '../../contexts/auth-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'v0.dev Clone',
    description: 'A clone of the v0.dev website built with Next.js',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    )
}
