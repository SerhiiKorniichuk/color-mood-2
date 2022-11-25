import { alpha } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  container: {
    '& input': {
      padding: '12px 4px',
      width: '100%',
      textAlign: 'center',
      fontSize: '16px',
      color: theme.palette.black,
      borderRadius: '10px',
      border: `1px solid ${alpha(theme.palette.black, 0.15)}`,
      backgroundColor: 'transparent',
      outline: 'none',

      '&:not([disabled])': {
        '&:focus': {
          borderColor: theme.palette.black,
        },
      },

      '&:disabled': {
        color: alpha(theme.palette.black, 0.15),
      },
    },
  },
}))

export { useStyles }
