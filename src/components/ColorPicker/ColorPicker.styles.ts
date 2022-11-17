import { PALETTE } from 'common/palette'
import styled from 'styled-components/macro'

const Container = styled('div')`
  padding: 16px;
  display: flex;
  flex-direction: column;
  background: ${PALETTE.WHITE};
  box-shadow: 0 6px 12px ${PALETTE.BLACK};

  & .react-colorful {
    width: 250px;
    height: 250px;

    &__saturation {
      margin: 10px 0 20px;
      border-radius: 10px;

      &-pointer {
        width: 25px;
        height: 25px;
      }
    }

    &__hue {
      margin: 0 0 20px;
      height: 20px;
      border-radius: 14px;

      &-pointer {
        width: 25px;
        height: 25px;
      }
    }
  }
`

export { Container }
