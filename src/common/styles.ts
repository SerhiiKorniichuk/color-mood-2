import { makeStyles } from 'tss-react/mui'

const useCommonStyles = makeStyles()(() => ({
  lineGrid: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

export { useCommonStyles }
