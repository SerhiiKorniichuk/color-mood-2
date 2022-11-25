import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    white: string
    black: string
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    white?: string
    black?: string
  }
}

const theme = createTheme({
  palette: {
    white: '#FFFFFF',
    black: '#000000',
  },
})

export { theme }
