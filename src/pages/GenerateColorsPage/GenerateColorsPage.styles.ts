import { alpha } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  container: {
    minHeight: '100vh',
    display: 'grid',
    gridAutoRows: '1fr auto',
  },
  footer: {
    position: 'relative',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0 -1px ${alpha(theme.palette.black, 0.08)}`,
  },
}))

export { useStyles }
