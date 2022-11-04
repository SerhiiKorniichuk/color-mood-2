import { ColorCard } from 'components/ColorCard/ColorCard'
import { useCallback, useEffect, useState } from 'react'
import * as CS from 'common/styles'
import * as S from 'pages/GenerateColorsPage/GenerateColorsPage.styles'
import { generate } from 'utills/colorsGeneration'
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton'
import { TColorCard } from 'common/types'

const INITIAL_CARDS_COUNT = 5

function GenerateColorsPage() {
  const [colors, setColors] = useState<TColorCard[]>(() =>
    generate.randomColorsList(INITIAL_CARDS_COUNT)
  )

  const generateNewColors = useCallback(() => {
    const updatedColors = colors.map((color) =>
      color.editable ? { ...color, value: generate.randomColor() } : color
    )
    setColors(updatedColors)
  }, [colors])

  const handeOnKeyDown = useCallback(
    (event: globalThis.KeyboardEvent) => {
      if (event.keyCode === 32) {
        generateNewColors()
      }
    },
    [generateNewColors]
  )

  useEffect(() => {
    document.addEventListener('keydown', handeOnKeyDown)
    return () => document.removeEventListener('keydown', handeOnKeyDown)
  }, [handeOnKeyDown])

  const onCardDelete = ({ id }: { id: string }) => {
    const updatedColors = colors.filter((color) => color.id !== id)
    setColors(updatedColors)
  }

  const onCardLock = ({ id, editable }: { id: string; editable: boolean }) => {
    const updatedColors = colors.map((color) =>
      color.id === id ? { ...color, editable } : color
    )
    setColors(updatedColors)
  }

  const handleGenerateButtonClick = () => {
    generateNewColors()
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }

  const disableGeneration = !colors.some((color) => color.editable)

  return (
    <S.Container>
      <CS.LineGrid>
        {colors.map(({ id, value, editable }) => (
          <ColorCard
            key={id}
            id={id}
            value={value}
            editable={editable}
            hideDeleteButton={colors.length === 1}
            onDelete={onCardDelete}
            onLock={onCardLock}
          />
        ))}
      </CS.LineGrid>
      <S.Footer>
        <PrimaryButton
          type="button"
          onClick={handleGenerateButtonClick}
          disabled={disableGeneration}
        >
          Generate
        </PrimaryButton>
      </S.Footer>
    </S.Container>
  )
}

export { GenerateColorsPage }
