import React from "react";
import styled, { css } from "styled-components";

const BurgerBox = styled.span`
  cursor: pointer;
`;

const Hamburger = styled.span<HamburgerInterface>`
  margin-right: 10px;
  position: relative;
  margin-top: calc(${(p) => p.height} + ${(p) => p.gutter});
  margin-bottom: calc(${(p) => p.height} + ${(p) => p.gutter});

  &,
  &:before,
  &:after {
    display: block;
    width: ${(p) => p.width};
    height: ${(p) => p.height};
    background-color: ${(p) => p.color};

    ${p => p.rounded && css`
      border-radius: 4px;
    `}

    transition-property: background-color, transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: ${(p) => p.duration};
  }

  &:before,
  &:after {
    position: absolute;
    content: "";
  }

  &:before {
    top: calc(-${(p) => p.height} + -${(p) => p.gutter});
  }
  &:after {
    top: calc(${(p) => p.height} + ${(p) => p.gutter});
  }

  ${({ active, height, gutter }) => active && css`

    & {
      background-color: transparent;
    }

    &:before {
      transform: translateY(calc(${height} + ${gutter})) rotate(45deg);
    }
    &:after {
      transform: translateY(calc(-${height} + -${gutter})) rotate(-45deg);
    }

  `}
`;

const Burger = ({
  width,
  height,
  gutter,
  color,
  rounded,
  duration,
  active,
  onClick
}: BurgerProps) => {
  return (
    <BurgerBox onClick={onClick}>
      <Hamburger
        width={width}
        height={height}
        gutter={gutter}
        color={color}
        rounded={rounded}
        duration={duration}
        active={active}
      />
    </BurgerBox>
  );
};

interface HamburgerInterface {
  width: string;
  height: string;
  gutter: string;
  color: string;
  duration: string;
  rounded: boolean;
  active: boolean;
}


interface BurgerProps extends HamburgerInterface {
  onClick: () => {}
}

Burger.defaultProps = {
  width: "20px",
  height: "2px",
  gutter: "3px",
  color: "black",
  duration: "0.3s",
  rounded: true,
  active: false,
  onClick: () => { }
};

export default Burger;
