import '@fontsource/public-sans'
import { ThemeProvider } from '@mui/material/styles'
import App from 'App'
import { theme } from 'common/theme'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
