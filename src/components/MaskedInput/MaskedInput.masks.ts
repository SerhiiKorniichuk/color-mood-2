import { IMask } from 'react-imask'

export const INPUT_MASKS = {
  HEX: {
    mask: '#`[******]',
    lazy: false,
  },
  RGB: {
    mask: 'rgb(RGB, RGB, RGB)',
    lazy: false,
    blocks: {
      RGB: {
        mask: IMask.MaskedRange,
        from: 0,
        to: 255,
      },
    },
  },
}
