import { useEventListener } from 'common/hooks/useEventListener'
import * as CS from 'common/styles'
import { ColorData } from 'common/types'
import { generate } from 'common/utils/colorsGeneration'
import { ColorCard } from 'components/ColorCard/ColorCard'
import { ColorPicker } from 'components/ColorPicker/ColorPicker'
import { Modal } from 'components/Modal/Modal'
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton'
import * as S from 'pages/GenerateColorsPage/GenerateColorsPage.styles'
import { useCallback, useState } from 'react'

const INITIAL_CARDS_COUNT = 5

function GenerateColorsPage() {
  const [colors, setColors] = useState<ColorData[]>(() =>
    generate.randomColorsList(INITIAL_CARDS_COUNT)
  )

  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(
    null
  )

  const handleColorSelect = (cardIndex: number) => () => {
    setSelectedColorIndex(cardIndex)
  }

  const generateNewColors = useCallback(() => {
    const updatedColors = colors.map((color) =>
      color.editable ? { ...color, hex: generate.randomColor() } : color
    )
    setColors(updatedColors)
  }, [colors])

  useEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      event.preventDefault()
      generateNewColors()
    }
  })

  const handleColorChange = (cardIndex: number) => (newColor: string) => {
    const updatedColors = colors.map((color, index) =>
      index === cardIndex ? { ...color, hex: newColor } : color
    )
    setColors(updatedColors)
  }

  const handleColorDelete = (cardIndex: number) => () => {
    const updatedColors = colors.filter((_, index) => index !== cardIndex)
    setColors(updatedColors)
  }

  const handleColorLock = (cardIndex: number) => () => {
    const updatedColors = colors.map((color, index) =>
      index === cardIndex ? { ...color, editable: !color.editable } : color
    )
    setColors(updatedColors)
  }

  const handleGenerateButtonClick = () => {
    generateNewColors()
  }

  const handleCloseModal = () => {
    setSelectedColorIndex(null)
  }

  const colorSelected = typeof selectedColorIndex === 'number'

  const disableGeneration = !colors.some((color) => color.editable)

  return (
    <>
      <S.Container>
        <CS.LineGrid>
          {colors.map(({ hex, editable }, index) => (
            <ColorCard
              key={index}
              hex={hex}
              editable={editable}
              hideDeleteButton={colors.length === 1}
              onClick={handleColorSelect(index)}
              onDelete={handleColorDelete(index)}
              onLock={handleColorLock(index)}
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

      <Modal isOpen={colorSelected} onRequestClose={handleCloseModal}>
        {colorSelected && (
          <ColorPicker
            color={colors[selectedColorIndex].hex}
            onChange={handleColorChange(selectedColorIndex)}
          />
        )}
      </Modal>
    </>
  )
}

export { GenerateColorsPage }
