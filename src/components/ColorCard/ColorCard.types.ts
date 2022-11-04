interface IColorCard {
  id: string
  value: string
  editable: boolean
  hideDeleteButton: boolean
  onDelete: (data: { id: string }) => void
  onLock: (data: { id: string; editable: boolean }) => void
}

interface IBody {
  hex: string
  luminance: number
}

export type { IColorCard, IBody }
