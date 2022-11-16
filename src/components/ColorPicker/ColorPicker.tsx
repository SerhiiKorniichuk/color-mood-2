import { HexColorInput, HexColorPicker } from 'react-colorful'
import { ColorPickerBaseProps } from 'react-colorful/dist/types'

function ColorPicker(props: Partial<ColorPickerBaseProps<string>>) {
  return (
    <>
      <HexColorPicker {...props} />
      <HexColorInput {...props} />
    </>
  )
}

export { ColorPicker }
