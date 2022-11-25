import { ButtonHTMLAttributes, forwardRef } from 'react'
import { useStyles } from './ActionButton.styles'

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  luminance?: number
  hide?: boolean
}

const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ luminance, hide, className, ...props }, ref) => {
    const { classes, cx } = useStyles({ luminance, hide })
    return (
      <button
        {...props}
        className={cx(classes.actionButton, className)}
        ref={ref}
      />
    )
  }
)

ActionButton.displayName = 'ActionButton'

export { ActionButton }
