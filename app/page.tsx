import {
  Github,
  GitBranch,
  GitCommit,
  GitCompare,
  GitPullRequest,
} from "lucide-react"
import { cn } from "@/lib/utils" // assuming you're using ShadCN's `cn` utility
import WordCloudDisplay from "@/components/word-cloud-display"
import { promises as fs } from "fs"
import path from "path"

const icons = [
  { icon: Github, size: 100, x: "left-[10%]", y: "top-[10%]" },
  { icon: GitBranch, size: 80, x: "right-[10%]", y: "top-[20%]" },
  { icon: GitCommit, size: 90, x: "left-[15%]", y: "bottom-[25%]" },
  { icon: GitCompare, size: 70, x: "right-[20%]", y: "bottom-[10%]" },
  { icon: GitPullRequest, size: 100, x: "left-1/2 -translate-x-1/2", y: "top-1/2 -translate-y-1/2" },
]

export default async function Home() {
  // Read the names.txt file from the public directory
  const filePath = path.join(process.cwd(), "names.txt")
  let fileContent

  try {
    fileContent = await fs.readFile(filePath, "utf8")
  } catch (error) {
    console.error("Error reading file:", error)
    fileContent = "Error reading file"
  }

  // Split the content by newlines, commas, or spaces to get individual names
  const names = fileContent
    .split(/[\n,\s]+/)
    .filter((name) => name.trim() !== "")
    .map((name) => name.trim())

  return (
    <main className="w-screen h-screen overflow-hidden relative">
      <WordCloudDisplay names={names} />
         </main>
  )
}
