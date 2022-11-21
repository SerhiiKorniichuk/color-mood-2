import chroma from 'chroma-js'
import { PALETTE } from 'common/palette'
import styled from 'styled-components/macro'

const ActionButtonContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`

interface ActionButtonProps {
  hide?: boolean
}
const ActionButton = styled('div')<ActionButtonProps>`
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 0;
  background-color: transparent;
  outline: none;
  user-select: none;
  transition: all 0.2s;
  opacity: ${({ hide }) => (hide ? 0 : 1)};
  visibility: ${({ hide }) => (hide ? 'hidden' : 'visible')};

  & > svg {
    width: 60%;
    height: 60%;
  }

  &:not([disabled]) {
    cursor: pointer;
  }
`

const ColorCodeView = styled('div')`
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 0.06em;
  white-space: nowrap;
  border: 0;
  background-color: transparent;
  transition: background-color 0.2s;
  outline: none;

  &:not([disabled]) {
    cursor: pointer;
  }
`

interface WrapperProps {
  hex: string
  luminance: number
}
const Wrapper = styled('div')
  .withConfig<WrapperProps>({
    shouldForwardProp: (props) => !['hex', 'luminance'].includes(props),
  })
  .attrs<WrapperProps>(({ hex }) => ({
    style: {
      backgroundColor: hex || PALETTE.WHITE,
    },
  }))`  
  position: relative;
  height: 100%;
  flex: 1;
  overflow: hidden;

  ${ActionButtonContainer} {
    position: absolute;
    left: 50%;
    bottom: calc(20% + 40px);
    transform: translateX(-50%);

    ${ActionButton} {
      color: ${({ luminance }) =>
        luminance > 0.6 ? PALETTE.BLACK : PALETTE.WHITE};
      
      & > svg {
        fill: ${({ luminance }) =>
          luminance > 0.6 ? PALETTE.BLACK : PALETTE.WHITE};
        stroke: ${({ luminance }) =>
          luminance > 0.6 ? PALETTE.BLACK : PALETTE.WHITE};
      }
      
      &:not(.active) {
        opacity: 0;
      }

      &.active {
        transform: scale(1.15);
      }

      &:not([disabled]) {
        &:hover {
          background-color: ${({ luminance }) =>
            luminance > 0.6
              ? chroma(PALETTE.BLACK).alpha(0.08).hex()
              : chroma(PALETTE.WHITE).alpha(0.18).hex()};
        }

        &:active {
          background-color: ${({ luminance }) =>
            luminance > 0.6
              ? chroma(PALETTE.BLACK).alpha(0.03).hex()
              : chroma(PALETTE.WHITE).alpha(0.08).hex()};
        }
      }
    }
    
  }

  ${ColorCodeView} {
    position: absolute;
    left: 50%;
    bottom: 10%;
    transform: translateX(-50%);
    color: ${({ luminance }) =>
      luminance > 0.6 ? PALETTE.BLACK : PALETTE.WHITE};

    &:not([disabled]) {
      &:hover {
        background-color: ${({ luminance }) =>
          luminance > 0.6
            ? chroma(PALETTE.BLACK).alpha(0.1).hex()
            : chroma(PALETTE.WHITE).alpha(0.2).hex()};
      }
      
      &:active {
        background-color: ${({ luminance }) =>
          luminance > 0.6
            ? chroma(PALETTE.BLACK).alpha(0.05).hex()
            : chroma(PALETTE.WHITE).alpha(0.1).hex()};
      }
    }
  }

  &:hover {
    ${ActionButtonContainer} {
      ${ActionButton} {
        &:not(.active) {
          opacity: 1;
        }
      }
    }
  }
`

export { Wrapper, ActionButtonContainer, ActionButton, ColorCodeView }
