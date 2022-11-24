import chroma from 'chroma-js'
import { PALETTE } from 'common/palette'
import styled from 'styled-components'

const Container = styled('div')`
  min-height: 100vh;
  display: grid;
  grid-auto-rows: 1fr auto;
`

const Footer = styled('div')`
  position: relative;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -1px ${chroma(PALETTE.BLACK).alpha(0.08).css()};
`

export { Container, Footer }
