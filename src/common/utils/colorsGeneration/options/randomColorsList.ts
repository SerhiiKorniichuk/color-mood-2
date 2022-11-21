import { ColorData } from 'common/types'
import { generate } from 'common/utils/colorsGeneration/index'

const randomColorsList = (count = 0): ColorData[] => {
  return Array.from({ length: count }, () => {
    return {
      hex: generate.randomColor(),
      editable: true,
    }
  })
}

export { randomColorsList }
