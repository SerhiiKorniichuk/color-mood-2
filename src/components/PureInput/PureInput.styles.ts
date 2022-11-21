import { PALETTE } from 'common/palette'
import styled from 'styled-components'

const Input = styled.input`
  padding: 12px 4px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: ${PALETTE.BLACK};
  border: 1px solid ${PALETTE.BLACK};
  background-color: transparent;
  outline: none;
`

export { Input }
