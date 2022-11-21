import chroma from 'chroma-js'
import { ChangeEvent, useEffect, useState } from 'react'
import InputMask, { Props } from 'react-input-mask'
import * as S from './HEXColorInput.styles'

const character = /[0-9A-Fa-f]/

const HEXColorMask = [
  '#',
  character,
  character,
  character,
  character,
  character,
  character,
]

interface HEXColorInputProps extends Omit<Props, 'mask' | 'onChange'> {
  onChange: (newColor: string) => void
}

function HEXColorInput({ value, onChange, ...props }: HEXColorInputProps) {
  const [localValue, setLocalValue] = useState(value)

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.toUpperCase()

    setLocalValue(newValue)

    if (chroma.valid(newValue) && newValue.length === HEXColorMask.length) {
      onChange(newValue)
    }
  }

  return (
    <S.Container>
      <InputMask
        {...props}
        mask={HEXColorMask}
        value={localValue}
        onChange={handleChange}
      />
    </S.Container>
  )
}

export { HEXColorInput }
