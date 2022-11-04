import { IColorCard } from 'components/ColorCard/ColorCard.types'
import { ReactComponent as PadLockIcon } from 'assets/padlock_icon.svg'
import { ReactComponent as CloseIcon } from 'assets/close_icon.svg'
import classNames from 'classnames'
import chroma from 'chroma-js'
import * as S from './ColorCard.styles'

function ColorCard({
  id,
  value,
  editable,
  hideDeleteButton,
  onDelete,
  onLock,
}: IColorCard) {
  const handleDeleteClick = () => onDelete({ id })
  const handleLockClick = () => onLock({ id, editable: !editable })

  const luminance = chroma(value).luminance()

  return (
    <S.Wrapper hex={value} luminance={luminance}>
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
      <S.ColorCodeView>{value}</S.ColorCodeView>
    </S.Wrapper>
  )
}

export { ColorCard }
