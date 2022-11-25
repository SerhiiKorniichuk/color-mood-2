import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles<{ hex: string; luminance: number }>()(
  (theme, { hex }) => ({
    wrapper: {
      position: 'relative',
      height: '100%',
      flex: 1,
      overflow: 'hidden',
      backgroundColor: hex || theme.palette.white,
    },

    actionsContainer: {
      position: 'absolute',
      left: '50%',
      bottom: 'calc(20% + 40px)',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '5px',
    },

    colorCodeView: {
      position: 'absolute',
      left: '50%',
      bottom: '10%',
      transform: 'translateX(-50%)',
    },
  })
)

export { useStyles }
