import { alpha } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles<{
  hide?: boolean
  luminance?: number
}>()((theme, { hide = false, luminance = 1 }) => ({
  actionButton: {
    padding: 0,
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    border: 0,
    backgroundColor: 'transparent',
    outline: 'none',
    userSelect: 'none',
    transition: 'all 0.2s',
    opacity: hide ? 0 : 1,
    visibility: hide ? 'hidden' : 'visible',

    '& > svg': {
      width: '60%',
      height: '60%',

      fill: luminance > 0.6 ? theme.palette.black : theme.palette.white,
      stroke: luminance > 0.6 ? theme.palette.black : theme.palette.white,
    },

    '&:not([disabled])': {
      cursor: 'pointer',

      '&:hover': {
        backgroundColor:
          luminance > 0.6
            ? alpha(theme.palette.black, 0.08)
            : alpha(theme.palette.white, 0.18),
      },

      '&:active': {
        backgroundColor:
          luminance > 0.6
            ? alpha(theme.palette.black, 0.03)
            : alpha(theme.palette.white, 0.08),
      },
    },
  },
}))

export { useStyles }
