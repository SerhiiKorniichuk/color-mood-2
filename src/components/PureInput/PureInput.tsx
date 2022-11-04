import { forwardRef, InputHTMLAttributes } from 'react'
import * as S from './PureInput.styles'

const PureInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <S.Input {...props} ref={ref} />
})

PureInput.displayName = 'PureInput'

export { PureInput }
