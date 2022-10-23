import * as S from 'components/PrimaryButton/PrimaryButton.styles'
import { ButtonHTMLAttributes } from 'react'

function PrimaryButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <S.Button {...props} />
}

export { PrimaryButton }
