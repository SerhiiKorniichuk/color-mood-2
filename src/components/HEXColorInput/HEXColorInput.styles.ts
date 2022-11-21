import chroma from 'chroma-js'
import { PALETTE } from 'common/palette'
import styled from 'styled-components'

const Container = styled.div`
  & input {
    padding: 12px 4px;
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: ${PALETTE.BLACK};
    border-radius: 10px;
    border: 1px solid ${chroma(PALETTE.BLACK).alpha(0.15).css()};
    background-color: transparent;
    outline: none;

    &:not([disabled]) {
      &:focus {
        border-color: ${PALETTE.BLACK};
      }
    }

    &:disabled {
      color: ${chroma(PALETTE.BLACK).alpha(0.45).css()};
    }
  }
`

export { Container }
