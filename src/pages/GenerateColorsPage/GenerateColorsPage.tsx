import { useEventListener } from 'common/hooks/useEventListener'
import { useCommonStyles } from 'common/styles'
import { ColorData } from 'common/types'
import { generate } from 'common/utilities/colorsGeneration'
import { ColorCard } from 'components/ColorCard/ColorCard'
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton'
import { useStyles } from 'pages/GenerateColorsPage/GenerateColorsPage.styles'
import { useCallback, useState } from 'react'

const INITIAL_CARDS_COUNT = 5

function GenerateColorsPage() {
  const [colors, setColors] = useState<ColorData[]>(() =>
    generate.randomColorsList(INITIAL_CARDS_COUNT)
  )

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

  const disableGeneration = !colors.some((color) => color.editable)

  const { classes: commonClasses } = useCommonStyles()

  const { classes } = useStyles()

  return (
    <div className={classes.container}>
      <div className={commonClasses.lineGrid}>
        {colors.map(({ hex, editable }, index) => (
          <ColorCard
            key={index}
            hex={hex}
            editable={editable}
            hideDeleteButton={colors.length === 1}
            onChange={handleColorChange(index)}
            onDelete={handleColorDelete(index)}
            onLock={handleColorLock(index)}
          />
        ))}
      </div>
      <div className={classes.footer}>
        <PrimaryButton
          type="button"
          onClick={handleGenerateButtonClick}
          disabled={disableGeneration}
        >
          Generate
        </PrimaryButton>
      </div>
    </div>
  )
}

export { GenerateColorsPage }
