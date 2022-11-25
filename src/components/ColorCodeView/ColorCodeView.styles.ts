import { alpha } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles<{ luminance?: number }>()(
  (theme, { luminance = 1 }) => ({
    colorCodeView: {
      padding: '10px 15px',
      color: luminance > 0.6 ? theme.palette.black : theme.palette.white,
      fontSize: '26px',
      fontWeight: 600,
      letterSpacing: '0.06em',
      whiteSpace: 'nowrap',
      border: 0,
      borderRadius: '10px',
      backgroundColor: 'transparent',
      transition: 'background-color 0.2s',
      outline: 'none',

      '&:not([disabled])': {
        cursor: 'pointer',

        '&:hover': {
          backgroundColor:
            luminance > 0.6
              ? alpha(theme.palette.black, 0.1)
              : alpha(theme.palette.white, 0.2),
        },

        '&:active': {
          backgroundColor:
            luminance > 0.6
              ? alpha(theme.palette.black, 0.05)
              : alpha(theme.palette.white, 0.1),
        },
      },
    },
  })
)

export { useStyles }
