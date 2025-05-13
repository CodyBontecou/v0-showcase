import { Button } from "@/components/ui/button"
import {
  MonitorIcon as MonitorScreenshot,
  ImportIcon as FileImport,
  LayoutDashboard,
  FormInput,
  Calculator,
} from "lucide-react"

export function ProjectSuggestions() {
  const suggestions = [
    {
      icon: <MonitorScreenshot className="h-4 w-4 mr-2" />,
      label: "Clone a Screenshot",
    },
    {
      icon: <FileImport className="h-4 w-4 mr-2" />,
      label: "Import from Figma",
    },
    {
      icon: <LayoutDashboard className="h-4 w-4 mr-2" />,
      label: "Landing Page",
    },
    {
      icon: <FormInput className="h-4 w-4 mr-2" />,
      label: "Sign Up Form",
    },
    {
      icon: <Calculator className="h-4 w-4 mr-2" />,
      label: "Calculate Factorial",
    },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {suggestions.map((suggestion, index) => (
        <Button key={index} variant="outline" className="h-9">
          {suggestion.icon}
          {suggestion.label}
        </Button>
      ))}
    </div>
  )
}
