import styled from 'styled-components/macro'
import chroma from 'chroma-js'
import { PALETTE } from 'common/palette'

const Button = styled('button')`
  padding: 12px 20px;
  display: flex;
  color: ${PALETTE.WHITE};
  text-transform: uppercase;
  border-radius: 10px;
  border: 1px solid ${chroma(PALETTE.WHITE).alpha(0.25).css()};
  background-color: ${chroma(PALETTE.WHITE).alpha(0.25).css()};
  box-shadow: 0 4px 30px ${chroma(PALETTE.BLACK).alpha(0.1).css()};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  outline: none;
  transition: all 0.5s;

  &:not([disabled]) {
    cursor: pointer;

    &:hover {
      background-color: ${chroma(PALETTE.WHITE).alpha(0.35).css()};
    }

    &:active {
      background-color: ${chroma(PALETTE.WHITE).alpha(0.15).css()};
      transition: all 0.2s;
    }
  }

  &:disabled {
    color: ${chroma(PALETTE.WHITE).alpha(0.6).css()};
    background-color: ${chroma(PALETTE.WHITE).alpha(0.15).css()};
  }
`

export { Button }
