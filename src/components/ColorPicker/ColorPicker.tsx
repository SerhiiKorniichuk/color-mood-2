import { HexColorInput, HexColorPicker } from 'react-colorful'
import { ColorPickerBaseProps } from 'react-colorful/dist/types'
import * as S from './ColorPicker.styles'

function ColorPicker(props: Partial<ColorPickerBaseProps<string>>) {
  return (
    <S.Container>
      <HexColorPicker {...props} />
      <HexColorInput {...props} />
    </S.Container>
  )
}

export { ColorPicker }
