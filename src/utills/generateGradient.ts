import chroma from 'chroma-js'

type TMode = 'rgb' | 'hsl' | 'hsv' | 'hsi' | 'lab' | 'lch' | 'hcl' | 'lrgb'

const generateGradient = (colors: string[], mode?: TMode) => {
  const convertedColors = chroma
    .scale(colors)
    .mode(mode || 'rgb')
    .colors(colors.length)
  return `linear-gradient(to right top, ${convertedColors.join(', ')})`
}

export { generateGradient }
