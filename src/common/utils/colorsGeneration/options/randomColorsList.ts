import { ColorData } from 'common/types'
import { generate } from 'common/utils/colorsGeneration/index'
import { getUniqId } from 'common/utils/getUniqId'

const randomColorsList = (count = 0): ColorData[] => {
  return Array.from({ length: count }, () => {
    return {
      id: getUniqId(),
      hex: generate.randomColor(),
      editable: true,
    }
  })
}

export { randomColorsList }
