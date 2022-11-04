import { ButtonHTMLAttributes } from 'react'
import * as S from './IconButton.styles'

interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  luminance?: number
}

function IconButton({ type, luminance = 0, ...props }: IIconButton) {
  return <S.Button type={type || 'button'} luminance={luminance} {...props} />
}

export { IconButton }
