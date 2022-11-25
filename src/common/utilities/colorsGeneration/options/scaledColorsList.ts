import chroma from 'chroma-js'
import { generate } from 'common/utilities/colorsGeneration/index'
import { getUniqId } from 'common/utilities/getUniqId'

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
