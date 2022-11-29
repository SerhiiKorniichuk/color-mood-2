import { ButtonHTMLAttributes, forwardRef } from 'react'
import { useStyles } from './ActionButton.styles'

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  luminance?: number
}

const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ luminance = 1, className, ...props }, ref) => {
    const { classes, cx } = useStyles({ luminance })
    return (
      <button {...props} className={cx(classes.button, className)} ref={ref} />
    )
  }
)

ActionButton.displayName = 'ActionButton'

export { ActionButton }
