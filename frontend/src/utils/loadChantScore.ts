// @ts-ignore
import { ChantScore } from '/exsurge/src/Exsurge.Chant.js'
// @ts-ignore
import { Gabc } from '../../exsurge/src/Exsurge.Gabc.js'
// @ts-ignore
import { ChantContext } from '../../exsurge/src/Exsurge.Drawing.js'

/**
 * Creates a ChantScore from a GABC string.
 * This replaces the deprecated Gabc.loadChantScore method.
 */
export function loadChantScore(
  ctxt: ChantContext,
  gabcSource: string,
  useDropCap: boolean = true
): ChantScore {
  const mappings = Gabc.createMappingsFromSource(gabcSource)
  const score = new ChantScore(ctxt, mappings, useDropCap)
  return score
}
