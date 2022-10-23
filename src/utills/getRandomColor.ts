import chroma from 'chroma-js'

const getRandomColor = () => {
  return chroma.random().hex().toUpperCase()
}

export { getRandomColor }
