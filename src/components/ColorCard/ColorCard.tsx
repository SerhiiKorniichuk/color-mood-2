import { ReactComponent as LockIcon } from 'assets/lock-icon.svg'
import { ChangeEvent, useEffect, useState } from 'react'
// import { IconButton } from 'components/IconButton/IconButton'
// import { ReactComponent as DirectionArrowsIcon } from 'assets/arrows-directions-icon.svg'
import { IColorCard } from 'components/ColorCard/ColorCard.types'
import { CopyButton } from 'components/CopyButton/CopyButton'
import * as S from './ColorCard.styles'

function ColorCard({ id, value, editable, onChange, onLock }: IColorCard) {
  const [localValue, setLocalValue] = useState('')

  useEffect(() => {
    setLocalValue(value)
  }, [value, setLocalValue])

  const handleLockClick = () => onLock({ id, editable: !editable })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocalValue(event.target.value)
  }

  const handleInputBlur = () => {
    if (value !== localValue) onChange({ id, value: localValue })
  }

  return (
    <S.Wrapper editable={editable}>
      <S.LockButton type="button" onClick={handleLockClick}>
        <LockIcon />
      </S.LockButton>
      <S.Container color={value} />
      <S.Footer>
        <S.CodePreview>
          <CopyButton valueForCopying={value} />
          <S.Input
            size={1}
            value={localValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {/* <IconButton> */}
          {/*  <DirectionArrowsIcon /> */}
          {/* </IconButton> */}
        </S.CodePreview>
      </S.Footer>
    </S.Wrapper>
  )
}

export { ColorCard }
