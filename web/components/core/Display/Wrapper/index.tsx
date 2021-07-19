import React from 'react'
import styled, { css } from 'styled-components'

interface WrapperProps {
  visible: boolean,
  gradient?: null | UIG.Gradient
}

const Wrapper = styled.div<WrapperProps>`
  top: 0;
  left: 20px;
  bottom: 0;
  background-color: #2d2d2d;
  position: absolute;
  right: 20px;
  border-radius: 8px;

  display: flex;
  justify-content: center;

  backface-visibility: hidden;
  transition: all .25s cubic-bezier(.62,.28,.23,.99);
  will-change: transform;
  transform: translate3d(0,-100%,0);

  ${({ gradient }) => gradient && css`
    background: linear-gradient(
      to right,
      ${[gradient.colors].join(', ')}
    );
  `}

  ${({ visible }) => visible === true && css`
    transform: translate3d(0,0,0);
  `}
`

Wrapper.displayName = 'Wrapper'

export default Wrapper