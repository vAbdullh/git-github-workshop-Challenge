"use client"

import { useState, useEffect } from "react"
import { Text } from "@visx/text"
import { Wordcloud } from "@visx/wordcloud"

interface WordCloudDisplayProps {
  names: string[]
}
interface WordData {
  text: string
  value: number
}

export default function WordCloudDisplay({ names }: WordCloudDisplayProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Process names into word data (each name will have a value of 1)
  const wordData = names.map((name) => ({ text: name, value: 1 }))

  // Update dimensions on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const fontSize = (word: WordData) => {
    // Make 403 bigger
    if (word.text === "403") {
      return dimensions.width < 600 ? 100 : 150 // Make "403" larger for small screens
    }
 return dimensions.width < 600 ? 20 : 40   }

  // Fixed rotation of 35 degrees
  const getRotationDegree = () => 35

  return (
    <div className="w-full h-full opacity-70">
      {dimensions.width > 0 && dimensions.height > 0 && (
        <Wordcloud
          words={wordData}
          width={dimensions.width}
          height={dimensions.height}
          fontSize={fontSize}
          font={"Impact"}
          padding={2}
          spiral="rectangular"
          rotate={getRotationDegree}
          random={() => 0.5}
        >
          {(cloudWords) =>
            cloudWords.map((w, i) => {
              const transform = `translate(${w.x}, ${w.y}) rotate(${w.rotate})`

              return (
                <Text
                  key={`${w.text}-${i}`}
                  fill={`hsl(${(i * 360) / cloudWords.length}, 70%, 50%)`}
                  textAnchor="middle"
                  transform={transform}
                  fontSize={w.size}
                  fontFamily={w.font}
                >
                  {w.text}
                </Text>
              )
            })
          }
        </Wordcloud>
      )}
    </div>
  )
}
