import { PALETTE } from 'common/palette'
import chroma from 'chroma-js'

const SHADOWS = {
  CARD: `
    ${chroma(PALETTE.BLACK).alpha(0.1).css()} 0 10px 15px -3px, 
    ${chroma(PALETTE.BLACK).alpha(0.05).css()} 0px 4px 6px -2px
  `,
}

export { SHADOWS }
