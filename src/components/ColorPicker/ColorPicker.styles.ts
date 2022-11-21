import { PALETTE } from 'common/palette'
import styled from 'styled-components/macro'

const Container = styled('div')`
  padding: 25px;
  display: flex;
  flex-direction: column;
  background: ${PALETTE.WHITE};
  border-radius: 25px;

  & .react-colorful {
    width: 250px;
    height: 225px;

    &__saturation {
      margin-bottom: 20px;
      border-radius: 20px;
      border-bottom: none;

      &__pointer {
        width: 20px;
        height: 20px;
      }
    }

    &__hue,
    &__alpha {
      height: 20px;
      border-radius: 20px;
      margin-bottom: 20px;

      &__pointer {
        width: 20px;
        height: 20px;
      }
    }
  }
`

export { Container }
