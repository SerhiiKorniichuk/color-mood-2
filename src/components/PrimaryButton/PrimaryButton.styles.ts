import { alpha } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  button: {
    padding: '12px 20px',
    display: 'flex',
    color: theme.palette.black,
    fontSize: '0.8em',
    textTransform: 'uppercase',
    fontWeight: 800,
    borderRadius: '10px',
    border: `1px solid ${theme.palette.white}`,
    backgroundColor: theme.palette.white,
    boxShadow: `0 0 0 1px ${alpha(theme.palette.black, 0.15)}`,
    outline: 'none',
    transition: 'all 0.2s',

    '&:not([disabled])': {
      cursor: 'pointer',

      '&:hover': {
        boxShadow: `0 0 5px 1px ${alpha(theme.palette.black, 0.08)}`,
      },

      '&:active': {
        transform: 'scale(0.98)',
      },
    },

    '&:disabled': {
      color: alpha(theme.palette.black, 0.6),
      boxShadow: `0 0 0 1px ${alpha(theme.palette.black, 0.08)}`,
    },
  },
}))

export { useStyles }
