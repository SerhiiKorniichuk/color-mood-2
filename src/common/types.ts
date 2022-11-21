export enum ColorMode {
  RGB = 'rgb',
  HSL = 'hsl',
  HSV = 'hsv',
  HSI = 'hsi',
  LAB = 'lab',
  LCH = 'lch',
  HCL = 'hcl',
  LRGB = 'lrgb',
}

export interface ColorData {
  hex: string
  editable: boolean
}

export interface Handler<TArg, TResult = void> {
  (arg: TArg): TResult
}
