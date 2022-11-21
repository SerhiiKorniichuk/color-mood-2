import { ReactComponent as CloseIcon } from 'assets/close_icon.svg'
import { ReactComponent as PadLockIcon } from 'assets/padlock_icon.svg'
import chroma from 'chroma-js'
import classNames from 'classnames'
import { PALETTE } from 'common/palette'
import { ColorData } from 'common/types'
import { ColorPicker } from 'components/ColorPicker/ColorPicker'
import { useState } from 'react'
import { ArrowContainer, Popover } from 'react-tiny-popover'
import * as S from './ColorCard.styles'

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

  const handlePopoverStatus = () =>
    setIsPopoverOpen((prevStatus) => !prevStatus)

  const handleColorChange = (newColor: string) => onChange(newColor)

  const handleDeleteClick = () => onDelete()

  const handleLockClick = () => onLock()

  const luminance = chroma(hex).luminance()

  return (
    <S.Wrapper hex={hex} luminance={luminance}>
      <S.ActionButtonContainer>
        <S.ActionButton onClick={handleDeleteClick} hide={hideDeleteButton}>
          <CloseIcon />
        </S.ActionButton>
        <S.ActionButton
          className={classNames({ active: !editable })}
          onClick={handleLockClick}
        >
          <PadLockIcon />
        </S.ActionButton>
      </S.ActionButtonContainer>

      <Popover
        isOpen={isPopoverOpen}
        padding={15}
        positions={['top', 'bottom', 'left', 'right']}
        onClickOutside={handlePopoverStatus}
        content={(popoverProps) => (
          <ArrowContainer
            {...popoverProps}
            arrowColor={PALETTE.WHITE}
            arrowSize={15}
            arrowStyle={{
              zIndex: '-1',
              bottom: '3px',
              width: '30px',
              height: '30px',
              border: 0,
              borderRadius: '5px',
              transform: 'rotate(45deg)',
              backgroundColor: PALETTE.WHITE,
            }}
          >
            <ColorPicker color={hex} onChange={handleColorChange} />
          </ArrowContainer>
        )}
      >
        <S.ColorCodeView onClick={handlePopoverStatus}>{hex}</S.ColorCodeView>
      </Popover>
    </S.Wrapper>
  )
}

export { ColorCard }
