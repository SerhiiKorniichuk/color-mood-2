import { ColorCard } from 'components/ColorCard/ColorCard'
import { getRandomColorsList, TColorCard } from 'utills/getRandomColorsList'
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton'
import { useState } from 'react'
import { getRandomColor } from 'utills/getRandomColor'
import * as CS from 'common/styles'
import * as S from 'pages/GenerateColorsPage/GenerateColorsPage.styles'
import { generateGradient } from 'utills/generateGradient'

interface ICardsWrapper {
  count?: number
}

function GenerateColorsPage({ count = 0 }: ICardsWrapper) {
  const [colors, setColors] = useState<TColorCard[]>(() =>
    getRandomColorsList(count)
  )

  const onCardLock = ({ id, editable }: { id: string; editable: boolean }) => {
    const updatedColors = colors.map((color) =>
      color.id === id ? { ...color, editable } : color
    )
    setColors(updatedColors)
  }

  const onCardChange = ({ id, value }: { id: string; value: string }) => {
    const updatedColors = colors.map((color) =>
      color.id === id ? { ...color, value } : color
    )
    setColors(updatedColors)
  }

  const generateNewColors = () => {
    const updatedColors = colors.map((color) =>
      color.editable ? { ...color, value: getRandomColor() } : color
    )
    setColors(updatedColors)
  }

  const gradient = generateGradient(colors.map(({ value }) => value))

  const disableGeneration = colors.every((color) => !color.editable)

  return (
    <S.Container gradient={gradient}>
      <CS.LineGrid>
        {colors.map(({ id, value, editable }) => (
          <ColorCard
            key={id}
            id={id}
            value={value}
            editable={editable}
            onChange={onCardChange}
            onLock={onCardLock}
          />
        ))}
      </CS.LineGrid>
      <S.Footer>
        <PrimaryButton onClick={generateNewColors} disabled={disableGeneration}>
          Generate
        </PrimaryButton>
      </S.Footer>
    </S.Container>
  )
}

export { GenerateColorsPage }
