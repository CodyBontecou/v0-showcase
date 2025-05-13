"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language?: string
  showLineNumbers?: boolean
}

export function CodeBlock({ code, language = "jsx", showLineNumbers = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.split("\n")

  return (
    <div className="relative rounded-lg border border-border bg-black text-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <div className="text-sm text-gray-400">{language}</div>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 gap-1 text-gray-400 hover:text-white hover:bg-gray-800"
          onClick={copyToClipboard}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy
            </>
          )}
        </Button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm">
          {lines.map((line, i) => (
            <div key={i} className="leading-relaxed">
              {showLineNumbers && (
                <span className="inline-block w-8 text-right mr-4 text-gray-500 select-none">{i + 1}</span>
              )}
              <span
                className={cn("text-gray-300", {
                  "text-blue-400": line.includes("import") || line.includes("export"),
                  "text-yellow-400": line.includes("function") || line.includes("=>"),
                  "text-green-400": line.includes("return") || line.includes("const") || line.includes("let"),
                })}
              >
                {line || " "}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  )
}
