import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
  container: {
    padding: '25px',
    display: 'flex',
    flexDirection: 'column',

    '& .react-colorful': {
      width: '250px',
      height: '225px',

      '&__saturation': {
        marginBottom: '20px',
        borderRadius: '20px',
        borderBottom: 'none',

        '&__pointer': {
          width: '20px',
          height: '20px',
        },
      },

      '&__hue, &__alpha': {
        height: '20px',
        borderRadius: '20px',
        marginBottom: '20px',

        '&__pointer': {
          width: '20px',
          height: '20px',
        },
      },
    },
  },
}))

export { useStyles }
