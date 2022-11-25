import chroma from 'chroma-js'

const randomColor = () => {
  return chroma.random().hex().toUpperCase()
}

export { randomColor }
