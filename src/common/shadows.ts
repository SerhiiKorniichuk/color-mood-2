import { PALETTE } from 'common/palette'
import chroma from 'chroma-js'

const SHADOWS = {
  CARD: `
    ${chroma(PALETTE.BLACK).alpha(0.16).css()} 0px 10px 36px 0px, 
    ${chroma(PALETTE.BLACK).alpha(0.06).css()} 0px 0px 0px 1px
  `,
}

export { SHADOWS }
