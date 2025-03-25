"use client"

import { useState, useEffect } from "react"
import { Text } from "@visx/text"
import { Wordcloud } from "@visx/wordcloud"
import { scaleLog } from "@visx/scale"

interface WordData {
  text: string
  value: number
}

interface WordCloudDisplayProps {
  names: string[]
}

export default function WordCloudDisplay({ names }: WordCloudDisplayProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Process names into word data with frequency counts
  const wordData: WordData[] = names.reduce((acc: WordData[], name: string) => {
    const existingWord = acc.find((item) => item.text.toLowerCase() === name.toLowerCase())
    if (existingWord) {
      existingWord.value += 1
    } else {
      acc.push({ text: name, value: 1 })
    }
    return acc
  }, [])

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

  // Font size scale based on word frequency
  const fontSizeScale = scaleLog({
    domain: [Math.min(...wordData.map((w) => w.value)), Math.max(...wordData.map((w) => w.value))],
    range: [14, 80],
  })

  // Font size accessor function
  const fontSize = (word: WordData) => fontSizeScale(word.value)

  // Fixed rotation of 35 degrees
  const getRotationDegree = () => 35

  return (
    <div className="w-full h-full">
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
            cloudWords.map((w, i) => (
              <Text
                key={`${w.text}-${i}`}
                fill={`hsl(${(i * 360) / cloudWords.length}, 70%, 50%)`}
                textAnchor="middle"
                transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
                fontSize={w.size}
                fontFamily={w.font}
              >
                {w.text}
              </Text>
            ))
          }
        </Wordcloud>
      )}
    </div>
  )
}

