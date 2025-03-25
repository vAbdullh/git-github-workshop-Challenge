
import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'
import {
  Github,
  GitBranch,
  GitCommit,
  GitCompare,
  GitPullRequest,
} from "lucide-react"

export const metadata: Metadata = {
  title: 'git-github-workshop-Challenge',
  description: 'A visualization of names in a word cloud format',
  generator: 'v0.dev',
}
const icons = [
  { icon: Github, size: 100, x: "left-[10%]", y: "top-[10%]" },
  { icon: GitBranch, size: 80, x: "right-[10%]", y: "top-[20%]" },
  { icon: GitCommit, size: 90, x: "left-[15%]", y: "bottom-[25%]" },
  { icon: GitCompare, size: 70, x: "right-[20%]", y: "bottom-[10%]" },
  { icon: GitPullRequest, size: 100, x: "left-1/2 -translate-x-1/2", y: "top-1/2 -translate-y-1/2" },
]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className='relative'>
        <Header />
        {children}
        <Background />
      </body>
    </html>
  )
}

const Background = () => (
  <div className="bg-wrapper absolute inset-0 -z-10 h-screen">
    {/* Glowing Circles with Icons Inside */}
    <div className="absolute inset-0">
      <div className="absolute top-[30%] left-[90%] transform -translate-x-1/2 -translate-y-1/2 grid place-items-center">
        <div className="w-[160px] h-[160px] rounded-full bg-[#65336F] blur-[70px] absolute" />
        <Github size={100} className="text-white opacity-5 relative z-10 mx-auto my-auto" />
      </div>

      <div className="absolute top-[90%] left-[75%] transform -translate-x-1/2 -translate-y-1/2 grid place-items-center">
        <div className="w-[160px] h-[160px] rounded-full bg-[#164663] blur-[70px] absolute" />
        <GitBranch size={80} className="text-white opacity-5  relative z-10 mx-auto my-auto" />
      </div>

      <div className="absolute top-[90%] left-[5%] transform -translate-x-1/2 -translate-y-1/2 grid place-items-center">
        <div className="w-[160px] h-[160px] rounded-full bg-[#164663] blur-[70px] absolute" />
        <GitCommit size={90} className="text-white opacity-5  relative z-10 mx-auto my-auto" />
      </div>

      <div className="absolute top-[20%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 grid place-items-center">
        <div className="w-[160px] h-[160px] rounded-full bg-[#65336F] blur-[70px] absolute" />
        <GitCompare size={70} className="text-white opacity-5  relative z-10 mx-auto my-auto" />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid place-items-center">
        <div className="w-[160px] h-[160px] rounded-full bg-[#164663] blur-[70px] absolute" />
        <GitPullRequest size={100} className="text-white opacity-5  relative z-10 mx-auto my-auto" />
      </div>
    </div>
  </div>
)
