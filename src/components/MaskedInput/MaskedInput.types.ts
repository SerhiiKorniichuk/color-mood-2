import { InputHTMLAttributes } from 'react'
import { INPUT_MASKS } from 'components/MaskedInput/MaskedInput.masks'

export interface IMaskedInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  maskType?: keyof typeof INPUT_MASKS
  value?: string
}
