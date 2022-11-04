import styled from 'styled-components/macro'
import chroma from 'chroma-js'
import { PALETTE } from 'common/palette'

const Button = styled('button')`
  padding: 12px 20px;
  display: flex;
  color: ${PALETTE.BLACK};
  font-size: 0.8em;
  text-transform: uppercase;
  font-weight: 800;
  border-radius: 10px;
  border: 1px solid ${PALETTE.WHITE};
  background-color: ${PALETTE.WHITE};
  box-shadow: 0 0 0 1px ${chroma(PALETTE.BLACK).alpha(0.15).css()};
  outline: none;
  transition: all 0.2s;

  &:not([disabled]) {
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 5px 1px ${chroma(PALETTE.BLACK).alpha(0.08).css()};
    }

    &:active {
      transform: scale(0.98);
    }
  }

  &:disabled {
    color: ${chroma(PALETTE.BLACK).alpha(0.6).css()};
    box-shadow: 0 0 0 1px ${chroma(PALETTE.BLACK).alpha(0.08).css()};
  }
`

export { Button }
