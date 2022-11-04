import { generate } from 'utills/colorsGeneration/index'
import chroma from 'chroma-js'
import { getUniqId } from 'utills/getUniqId'

const scaledColorsList = (
  count: number,
  firstColor?: string,
  lastColor?: string
) => {
  const color1 = firstColor || generate.randomColor()
  const color2 = lastColor || generate.randomColor()

  const scaledColors = chroma
    .scale([color1, color2])
    .mode('lch')
    .colors(count || 0)

  return scaledColors.map((color) => ({
    id: getUniqId(),
    value: color,
    editable: true,
  }))
}

export { scaledColorsList }
