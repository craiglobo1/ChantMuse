import { useEffect, useRef } from 'react'

// @ts-ignore
import * as exsurge from '../lib/exsurge/exsurge.es.js'
// import { ChantContext, Gabc, ChantScore } from '../../exsurge/dist/exsurge.es.js'

interface Props {
  gabc: string
}
export default function ChantRenderer({ gabc }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctxt = new exsurge.ChantContext()

    try {
      // Step 1: Parse the GABC string into mappings
      const mappings = exsurge.Gabc.createMappingsFromSource(ctxt, gabc)

      // Step 2: Create a ChantScore manually
      const score = new exsurge.ChantScore(ctxt, mappings, true)

      // Step 3: Layout and render
      score.performLayout(ctxt)
      score.layoutChantLines(ctxt, 1000, () => {
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
      className="p-4 rounded border overflow-auto"
    />
  )
}