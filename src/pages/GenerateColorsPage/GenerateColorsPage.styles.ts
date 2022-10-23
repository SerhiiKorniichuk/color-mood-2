import styled from 'styled-components/macro'

const Container = styled('div')<{ gradient: string }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ gradient }) => gradient};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.5s;
`

const Footer = styled('div')`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export { Container, Footer }
