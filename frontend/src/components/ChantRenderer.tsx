import React, { useEffect, useRef } from 'react'
// @ts-ignore
import * as exsurge from '../lib/exsurge/exsurge.es.js'

interface Props {
  gabc: string,
  onAudioMappingsChange: (mappings: Array<{ pitch: any, duration: number }>) => void;
}

function mappingsToAudiomapping(mappings: any[]) {
  const audioMap: Array<{ pitch: any, duration: number }> = []
  for (const mapping of mappings) {
    for (const notation of mapping.notations) {
      if (notation.notes) {
        for (const note of notation.notes) {
          let duration = 1
          if (note.morae && note.morae.length > 0) {
            duration = 2
          }
          if (note.pitch) {
            audioMap.push({ pitch: note.pitch, duration })
          }
        }
      }
    }
  }
  return audioMap
}

const ChantRenderer: React.FC<Props> = ({ gabc, onAudioMappingsChange }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctxt = new exsurge.ChantContext()
    try {
      // Step 1: Parse the GABC string into mappings
      const mappings = exsurge.Gabc.createMappingsFromSource(ctxt, gabc)

      // Step 2: Create a ChantScore manually
      const score = new exsurge.ChantScore(ctxt, mappings, true)

      // map GABC elements to audio
      onAudioMappingsChange(mappingsToAudiomapping(mappings))


      // Step 3: Layout and render
      score.performLayout(ctxt)
      score.layoutChantLines(ctxt, 1090, () => {
        const svgHtml = score.createSvg(ctxt)
        if (containerRef.current) {
          containerRef.current.innerHTML = svgHtml
        }
      })
    } catch (err) {
      if (containerRef.current) {
        containerRef.current.innerHTML = `<text x="10" y="20" fill="red">Invalid GABC syntax</text>`
      }
      console.error('GABC parse/render error:', err)
    }
  }, [gabc])

  return (
    <div
      ref={containerRef}
      className="p-4 rounded bg-white-100"
    />
  )
}

export default ChantRenderer
