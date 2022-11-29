import Popover from '@mui/material/Popover'
import { ReactComponent as CloseIcon } from 'assets/close_icon.svg'
import { ReactComponent as PadLockIcon } from 'assets/padlock_icon.svg'
import chroma from 'chroma-js'
import { ColorData } from 'common/types'
import { ColorPicker } from 'components/ColorPicker/ColorPicker'
import { useState } from 'react'
import { ActionButton } from '../ActionButton/ActionButton'
import { ColorCodeView } from '../ColorCodeView/ColorCodeView'
import { useStyles } from './ColorCard.styles'

interface ColorCardProps extends ColorData {
  hideDeleteButton: boolean
  onChange: (newColor: string) => void
  onDelete: () => void
  onLock: () => void
}

function ColorCard({
  hex,
  editable,
  hideDeleteButton,
  onChange,
  onDelete,
  onLock,
}: ColorCardProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const handleColorChange = (newColor: string) => onChange(newColor)

  const handleDeleteClick = () => onDelete()

  const handleLockClick = () => onLock()

  const popoverIsActive = Boolean(anchorEl)

  const popoverId = popoverIsActive ? 'simple-popover' : undefined

  const luminance = chroma(hex).luminance()

  const { classes, cx } = useStyles({ hex, popoverIsActive })

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <ActionButton
            className={cx(classes.button, { hide: hideDeleteButton })}
            luminance={luminance}
            onClick={handleDeleteClick}
          >
            <CloseIcon />
          </ActionButton>
          <ActionButton
            luminance={luminance}
            className={cx(classes.button, { active: !editable })}
            onClick={handleLockClick}
          >
            <PadLockIcon />
          </ActionButton>
        </div>

        <ColorCodeView
          active={popoverIsActive}
          luminance={luminance}
          className={classes.preview}
          onClick={handlePopoverOpen}
        >
          {hex}
        </ColorCodeView>
      </div>

      <Popover
        id={popoverId}
        open={popoverIsActive}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transitionDuration={0}
        PaperProps={{ className: classes.popover }}
      >
        <ColorPicker color={hex} onChange={handleColorChange} />
      </Popover>
    </>
  )
}

export { ColorCard }
