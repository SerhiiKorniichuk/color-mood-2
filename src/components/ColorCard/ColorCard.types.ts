interface IColorCard {
  id: string
  value: string
  editable: boolean
  onChange: (data: { id: string; value: string }) => void
  onLock: (data: { id: string; editable: boolean }) => void
}

interface IWrapped {
  editable: boolean
}

interface IContainer {
  color: string
}

export type { IColorCard, IWrapped, IContainer }
