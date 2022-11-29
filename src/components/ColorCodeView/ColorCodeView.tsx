import { ButtonHTMLAttributes, forwardRef } from 'react'
import { useStyles } from './ColorCodeView.styles'

interface ColorCodeViewProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  luminance?: number
}

const ColorCodeView = forwardRef<HTMLButtonElement, ColorCodeViewProps>(
  ({ active, luminance, className, type = 'button', ...props }, ref) => {
    const { classes, cx } = useStyles({ active, luminance })
    return (
      <button
        {...props}
        type={type}
        className={cx(classes.button, className)}
        ref={ref}
      />
    )
  }
)

ColorCodeView.displayName = 'ColorCodeView'

export { ColorCodeView }
