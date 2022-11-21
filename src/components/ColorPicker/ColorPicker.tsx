import { HEXColorInput } from 'components/HEXColorInput/HEXColorInput'
import { HexColorPicker } from 'react-colorful'
import { ColorPickerBaseProps } from 'react-colorful/dist/types'
import * as S from './ColorPicker.styles'

function ColorPicker({
  color,
  onChange,
  ...props
}: ColorPickerBaseProps<string>) {
  const handleChange = (newColor: string) => {
    onChange(newColor.toLocaleUpperCase())
  }

  return (
    <S.Container>
      <HexColorPicker {...props} color={color} onChange={handleChange} />
      <HEXColorInput
        value={color}
        onChange={handleChange}
        maskPlaceholder=""
        alwaysShowMask
      />
    </S.Container>
  )
}

export { ColorPicker }
