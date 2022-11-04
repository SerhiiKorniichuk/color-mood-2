import { getUniqId } from 'utills/getUniqId'
import { generate } from 'utills/colorsGeneration/index'

const randomColorsList = (count = 0) => {
  return Array.from({ length: count }, () => {
    return {
      id: getUniqId(),
      value: generate.randomColor(),
      editable: true,
    }
  })
}

export { randomColorsList }
