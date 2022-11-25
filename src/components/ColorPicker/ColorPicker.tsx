import { HEXColorInput } from 'components/HEXColorInput/HEXColorInput'
import { HexColorPicker } from 'react-colorful'
import { ColorPickerBaseProps } from 'react-colorful/dist/types'
import { useStyles } from './ColorPicker.styles'

function ColorPicker({
  color,
  onChange,
  ...props
}: ColorPickerBaseProps<string>) {
  const handleChange = (newColor: string) => {
    onChange(newColor.toLocaleUpperCase())
  }

  const { classes } = useStyles()

  return (
    <div className={classes.container}>
      <HexColorPicker {...props} color={color} onChange={handleChange} />
      <HEXColorInput
        value={color}
        onChange={handleChange}
        maskPlaceholder=""
        alwaysShowMask
      />
    </div>
  )
}

export { ColorPicker }
