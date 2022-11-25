import { useTheme } from '@mui/material'
import { ReactComponent as CloseIcon } from 'assets/close_icon.svg'
import { ReactComponent as PadLockIcon } from 'assets/padlock_icon.svg'
import chroma from 'chroma-js'
import { ColorData } from 'common/types'
import { ColorPicker } from 'components/ColorPicker/ColorPicker'
import { useState } from 'react'
import { ArrowContainer, Popover } from 'react-tiny-popover'
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
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const handlePopoverStatus = () => {
    setIsPopoverOpen((prevStatus) => !prevStatus)
  }

  const handleColorChange = (newColor: string) => onChange(newColor)

  const handleDeleteClick = () => onDelete()

  const handleLockClick = () => onLock()

  const luminance = chroma(hex).luminance()

  const theme = useTheme()

  const { classes, cx } = useStyles({ hex, luminance })

  return (
    <div className={classes.wrapper}>
      <div className={classes.actionsContainer}>
        <ActionButton
          className={cx(classes.actionButton, { hide: hideDeleteButton })}
          luminance={luminance}
          onClick={handleDeleteClick}
        >
          <CloseIcon />
        </ActionButton>
        <ActionButton
          luminance={luminance}
          className={cx(classes.actionButton, { active: !editable })}
          onClick={handleLockClick}
        >
          <PadLockIcon />
        </ActionButton>
      </div>

      <Popover
        isOpen={isPopoverOpen}
        padding={15}
        positions={['top', 'bottom', 'left', 'right']}
        onClickOutside={handlePopoverStatus}
        content={(popoverProps) => (
          <ArrowContainer
            {...popoverProps}
            arrowColor={theme.palette.white}
            arrowSize={15}
            arrowStyle={{
              zIndex: '-1',
              bottom: '3px',
              width: '30px',
              height: '30px',
              border: 0,
              borderRadius: '5px',
              transform: 'rotate(45deg)',
              backgroundColor: theme.palette.white,
            }}
          >
            <ColorPicker color={hex} onChange={handleColorChange} />
          </ArrowContainer>
        )}
      >
        <ColorCodeView
          luminance={luminance}
          className={classes.colorCodeView}
          onClick={handlePopoverStatus}
        >
          {hex}
        </ColorCodeView>
      </Popover>
    </div>
  )
}

export { ColorCard }
