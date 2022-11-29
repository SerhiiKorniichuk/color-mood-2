import { makeStyles } from 'tss-react/mui'

interface StylesProps {
  hex: string
  popoverIsActive: boolean
}

const useStyles = makeStyles<StylesProps, 'button'>()(
  (theme, { hex, popoverIsActive }, classes) => ({
    wrapper: {
      position: 'relative',
      height: '100%',
      flex: 1,
      minWidth: '190px',
      overflow: 'hidden',
      backgroundColor: hex || theme.palette.white,

      '&:hover': {
        [`& .${classes.button}`]: {
          '&:not(.hide)': {
            opacity: 1,
            visibility: 'visible',
          },
        },
      },
    },

    container: {
      position: 'absolute',
      left: '50%',
      bottom: 'calc(20% + 40px)',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '5px',

      ...(popoverIsActive && {
        opacity: 0,
        visibility: 'hidden',
      }),
    },

    button: {
      '&.active': {
        transform: 'scale(1.15)',
      },

      '&:not(.active), &.hide': {
        opacity: 0,
        visibility: 'hidden',
      },
    },

    preview: {
      position: 'absolute',
      left: '50%',
      bottom: '10%',
      transform: 'translateX(-50%)',
      minWidth: '170px',

      ...(popoverIsActive && {
        '&:before': {
          content: '""',
          position: 'absolute',
          width: '7px',
          height: '7px',
          top: '-20px',
          left: '50%',
          transform: 'traslateX(-50%)',
          borderRadius: '10px',
          backgroundColor: theme.palette.white,
          boxShadow: theme.shadows[1],
        },
      }),
    },

    popover: {
      margin: '-32px 0 0',
      border: 0,
      borderRadius: '25px',
      background: theme.palette.white,
      boxShadow: theme.shadows[1],
    },
  })
)

export { useStyles }
