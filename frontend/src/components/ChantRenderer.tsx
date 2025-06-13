import { useEffect, useRef } from 'react'
import { ChantContext, Gabc } from 'exsurge'

interface Props {
  gabc: string
}

export default function ChantRenderer({ gabc }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctxt = new ChantContext()

    try{

    // Load and parse the GABC score
    const score = Gabc.loadChantScore(ctxt, gabc, true)
    console.log(score);
    // Perform layout and render
    score.performLayout(ctxt, () => {
      score.layoutChantLines(ctxt, 1000, () => {
        const svgHtml = score.createDrawable(ctxt)

        if (containerRef.current) {
          containerRef.current.innerHTML = svgHtml
        }
      })
    })
    }catch (err) {
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
