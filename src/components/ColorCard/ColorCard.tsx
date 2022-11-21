import { ReactComponent as CloseIcon } from 'assets/close_icon.svg'
import { ReactComponent as PadLockIcon } from 'assets/padlock_icon.svg'
import chroma from 'chroma-js'
import classNames from 'classnames'
import { ColorData } from 'common/types'
import * as S from './ColorCard.styles'

interface ColorCardProps extends ColorData {
  hideDeleteButton: boolean
  onClick: () => void
  onDelete: () => void
  onLock: () => void
}

function ColorCard({
  hex,
  editable,
  hideDeleteButton,
  onClick,
  onDelete,
  onLock,
}: ColorCardProps) {
  const handleViewClick = () => onClick()

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
      <S.ColorCodeView onClick={handleViewClick}>{hex}</S.ColorCodeView>
    </S.Wrapper>
  )
}

export { ColorCard }
