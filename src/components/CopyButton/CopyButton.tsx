import { IconButton } from 'components/IconButton/IconButton'
import { ButtonHTMLAttributes, memo, useEffect, useState } from 'react'
import { ReactComponent as CopyIcon } from 'assets/copy-icon.svg'
import { ReactComponent as DoneIcon } from 'assets/done-icon.svg'

type TCopyButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  valueForCopying: string
}

const CopyButton = memo(function CopyButton({
  valueForCopying,
  ...props
}: TCopyButton) {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setIsCopied(false), 2500)
    if (!isCopied) clearInterval(id)
    return () => clearInterval(id)
  }, [isCopied])

  const handleClick = () => {
    navigator.clipboard.writeText(valueForCopying).then(() => setIsCopied(true))
  }

  return (
    <IconButton {...props} onClick={handleClick}>
      {isCopied ? <DoneIcon /> : <CopyIcon />}
    </IconButton>
  )
})

export { CopyButton }
