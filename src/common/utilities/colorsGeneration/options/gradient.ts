import chroma from 'chroma-js'
import { ColorMode } from 'common/types'

const gradient = (colors: string[], mode?: ColorMode) => {
  const convertedColors = chroma
    .scale(colors)
    .mode(mode || ColorMode.RGB)
    .colors(colors.length)
  return `linear-gradient(to right top, ${convertedColors.join(', ')})`
}

export { gradient }
