import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles<
  { hex: string; luminance: number },
  'actionsContainer' | 'actionButton' | 'colorCodeView'
>()((theme, { hex }, classes) => ({
  wrapper: {
    position: 'relative',
    height: '100%',
    flex: 1,
    overflow: 'hidden',
    backgroundColor: hex || theme.palette.white,

    [`& .${classes.actionsContainer}`]: {
      position: 'absolute',
      left: '50%',
      bottom: 'calc(20% + 40px)',
      transform: 'translateX(-50%)',
    },

    [`& .${classes.actionButton}`]: {
      '&.active': {
        transform: 'scale(1.15)',
      },

      '&:not(.active), &.hide': {
        opacity: 0,
        visibility: 'hidden',
      },
    },

    [`& .${classes.colorCodeView}`]: {
      position: 'absolute',
      left: '50%',
      bottom: '10%',
      transform: 'translateX(-50%)',
    },

    '&:hover': {
      [`& .${classes.actionButton}`]: {
        '&:not(.hide)': {
          opacity: 1,
          visibility: 'visible',
        },
      },
    },
  },

  actionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
  },

  actionButton: {},

  colorCodeView: {},
}))

export { useStyles }
