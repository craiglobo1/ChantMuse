import { useEffect, useRef } from 'react'

// @ts-ignore
import { ChantContext, Gabc, ChantScore } from '../../exsurge/dist/exsurge.es.js'
import { loadChantScore } from '../utils/loadChantScore'

interface Props {
  gabc: string
}
export default function ChantRenderer({ gabc }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctxt = new ChantContext()

    try {
      // Step 1: Parse the GABC string into mappings
      const mappings = Gabc.createMappingsFromSource(ctxt, gabc)

      // Step 2: Create a ChantScore manually
      const score = new ChantScore(ctxt, mappings, true)

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
      className="bg-white p-4 rounded border overflow-auto"
    />
  )
}