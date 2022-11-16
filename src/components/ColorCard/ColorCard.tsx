import { ReactComponent as CloseIcon } from 'assets/close_icon.svg'
import { ReactComponent as PadLockIcon } from 'assets/padlock_icon.svg'
import chroma from 'chroma-js'
import classNames from 'classnames'
import { ColorData, Handler } from 'common/types'
import * as S from './ColorCard.styles'

interface ColorCardProps extends ColorData {
  hideDeleteButton: boolean
  onClick: Handler<ColorData>
  onDelete: Handler<ColorData>
  onLock: Handler<ColorData>
}

function ColorCard({
  id,
  hex,
  editable,
  hideDeleteButton,
  onClick,
  onDelete,
  onLock,
}: ColorCardProps) {
  const colorData = { id, hex, editable }

  const handleViewClick = () => onClick(colorData)

  const handleDeleteClick = () => onDelete(colorData)

  const handleLockClick = () => onLock({ ...colorData, editable: !editable })

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
