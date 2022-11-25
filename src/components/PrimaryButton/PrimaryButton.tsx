import { ButtonHTMLAttributes, forwardRef } from 'react'
import { useStyles } from './PrimaryButton.styles'

const PrimaryButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ type = 'button', className, ...props }, ref) => {
  const { classes, cx } = useStyles()
  return (
    <button
      {...props}
      ref={ref}
      type={type}
      className={cx(classes.button, className)}
    />
  )
})

PrimaryButton.displayName = 'PrimaryButton'

export { PrimaryButton }
