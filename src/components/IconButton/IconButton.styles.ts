import styled from 'styled-components/macro'
import { PALETTE } from 'common/palette'
import chroma from 'chroma-js'

const Button = styled('button')`
  padding: 0;
  width: 45px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: transparent;
  outline: none;
  transition: all 0.2s;

  & svg {
    width: 15px;
    height: 15px;
    fill: ${PALETTE.WHITE};
  }

  &:not([disabled]) {
    cursor: pointer;

    &:hover {
      background-color: ${chroma(PALETTE.WHITE).alpha(0.2).hex()};
    }

    &:active {
      background-color: ${chroma(PALETTE.WHITE).alpha(0.1).hex()};
    }
  }
`

export { Button }
