import { getRandomColor } from 'utills/getRandomColor'
import { getUniqId } from 'utills/getUniqId'

type TColorCard = {
  id: string
  value: string
  editable: boolean
}

const getRandomColorsList = (count = 0) => {
  return Array.from({ length: count }, () => {
    return {
      id: getUniqId(),
      value: getRandomColor(),
      editable: true,
    }
  })
}

export type { TColorCard }
export { getRandomColorsList }
