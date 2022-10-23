import styled from 'styled-components/macro'
import { PALETTE } from 'common/palette'
import { SHADOWS } from 'common/shadows'
import { IWrapped, IContainer } from 'components/ColorCard/ColorCard.types'
import chroma from 'chroma-js'

const Wrapper = styled('div')<IWrapped>`
  position: relative;
  border-radius: 20px;
  box-shadow: ${SHADOWS.CARD};

  & > button {
    z-index: 1;
    position: absolute;
    left: 50%;
    top: ${({ editable }) => (editable ? 0 : '-45px')};
    transform: translateX(-50%);
    opacity: ${({ editable }) => (editable ? 0.3 : 1)};
  }

  &:hover {
    & button {
      top: -50px;
    }
  }
`

const Container = styled('div')<IContainer>`
  z-index: 2;
  position: relative;
  height: 200px;
  width: 200px;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0 0;
  background-color: ${({ color }) => color || PALETTE.WHITE};
  transition: all 0.5s;
`

const Footer = styled('div')`
  display: flex;
  align-items: center;
  border-radius: 0 0 20px 20px;
  border: 1px solid ${chroma(PALETTE.WHITE).alpha(0.25).css()};
  background-color: ${chroma(PALETTE.WHITE).alpha(0.25).css()};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  overflow: hidden;
`

const CodePreview = styled('div')`
  flex-basis: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 45px 1fr 45px;
`

const LockButton = styled('button')`
  padding: 10px 15px 20px;
  border: 0;
  background-color: transparent;
  transition: all 0.5s;

  & svg {
    width: 25px;
    height: 25px;
    color: ${PALETTE.BLACK};
    stroke: ${PALETTE.BLACK};
  }

  &:not([disabled]) {
    cursor: pointer;
  }
`

const Input = styled('input')`
  padding: 12px 10px;
  text-align: center;
  font-size: 14px;
  color: ${PALETTE.WHITE};
  border: 0;
  background-color: transparent;
  outline: none;
`

export { Wrapper, Container, Footer, CodePreview, LockButton, Input }
