import styled from 'styled-components'
import { PALETTE } from 'common/palette'
import chroma from 'chroma-js'

interface IButton {
  luminance: number
}

const Button = styled('button')<IButton>`
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ luminance }) =>
    luminance > 0.6 ? PALETTE.BLACK : PALETTE.WHITE};
  border-radius: 5px;
  border: 0;
  background-color: transparent;
  outline: none;
  transition: all 0.2s;

  & > svg {
    width: 80%;
    height: 80%;
    fill: ${PALETTE.WHITE};
  }

  &:not([disabled]) {
    cursor: pointer;

    &:hover {
      background-color: ${({ luminance }) =>
        luminance > 0.6
          ? chroma(PALETTE.BLACK).alpha(0.1).hex()
          : chroma(PALETTE.WHITE).alpha(0.2).hex()};
    }

    &:active {
      background-color: ${({ luminance }) =>
        luminance > 0.6
          ? chroma(PALETTE.BLACK).alpha(0.05).hex()
          : chroma(PALETTE.WHITE).alpha(0.1).hex()};
    }
  }
`

export { Button }
