import { ButtonHTMLAttributes, forwardRef } from 'react'
import { useStyles } from './ColorCodeView.styles'

interface ColorCodeViewProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  luminance?: number
}

const ColorCodeView = forwardRef<HTMLButtonElement, ColorCodeViewProps>(
  ({ luminance, className, type = 'button', ...props }, ref) => {
    const { classes, cx } = useStyles({ luminance })
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
