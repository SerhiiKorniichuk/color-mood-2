import { ButtonHTMLAttributes } from 'react'
import * as S from './IconButton.styles'

function IconButton({
  type,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <S.Button type={type || 'button'} {...props} />
}

export { IconButton }
