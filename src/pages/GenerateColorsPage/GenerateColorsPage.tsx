import { useEventListener } from 'common/hooks/useEventListener'
import * as CS from 'common/styles'
import { ColorData, Handler } from 'common/types'
import { blurActiveElement } from 'common/utils/blurActiveElement'
import { generate } from 'common/utils/colorsGeneration'
import { ColorCard } from 'components/ColorCard/ColorCard'
import { ColorPicker } from 'components/ColorPicker/ColorPicker'
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton'
import * as S from 'pages/GenerateColorsPage/GenerateColorsPage.styles'
import { useCallback, useState } from 'react'

const INITIAL_CARDS_COUNT = 5

function GenerateColorsPage() {
  const [colors, setColors] = useState<ColorData[]>(() =>
    generate.randomColorsList(INITIAL_CARDS_COUNT)
  )

  const [selectedColorId, setSelectedColorId] = useState('')

  const handleColorSelect: Handler<ColorData> = ({ id }) => {
    setSelectedColorId(id)
  }

  const generateNewColors = useCallback(() => {
    const updatedColors = colors.map((color) =>
      color.editable ? { ...color, hex: generate.randomColor() } : color
    )
    setColors(updatedColors)
  }, [colors])

  useEventListener('keydown', (event) => {
    if (event.code === 'Space') generateNewColors()
  })

  const handleColorChange: Handler<ColorData> = ({ id, hex }) => {
    const updatedColors = colors.map((color) =>
      color.id === id ? { ...color, hex } : color
    )
    setColors(updatedColors)
  }

  const handleColorDelete: Handler<ColorData> = ({ id }) => {
    const updatedColors = colors.filter((color) => color.id !== id)
    setColors(updatedColors)
  }

  const handleColorLock: Handler<ColorData> = ({ id, editable }) => {
    const updatedColors = colors.map((color) =>
      color.id === id ? { ...color, editable } : color
    )
    setColors(updatedColors)
  }

  const handleGenerateButtonClick = () => {
    generateNewColors()
    blurActiveElement()
  }

  const selectedColor = colors.find((color) => color.id === selectedColorId)

  const disableGeneration = !colors.some((color) => color.editable)

  return (
    <>
      <S.Container>
        <CS.LineGrid>
          {colors.map(({ id, hex, editable }) => (
            <ColorCard
              key={id}
              id={id}
              hex={hex}
              editable={editable}
              hideDeleteButton={colors.length === 1}
              onClick={handleColorSelect}
              onDelete={handleColorDelete}
              onLock={handleColorLock}
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

      {selectedColor && (
        <ColorPicker
          color={selectedColor.hex}
          onChange={() => handleColorChange(selectedColor)}
        />
      )}
    </>
  )
}

export { GenerateColorsPage }
