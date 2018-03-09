import React from 'react'
import styled from 'styled-components'

const CountdownCont = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  text-align: center;
  right: 10px;
  bottom: 10px;
`

const CountdownNumber = styled.div`
  color: #36c;
  font-size: 12px;
  display: inline-block;
  line-height: 20px;
`

const CountdownSVG = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  transform: rotateY(-180deg) rotateZ(-90deg);

  & .circle {
    stroke-dasharray: 113px;
    stroke-dashoffset: 0px;
    stroke-linecap: round;
    stroke-width: 2px;
    stroke: #6195ff;
    fill: none;
    animation: countdown 2s linear infinite forwards;
  }

  @keyframes countdown {
    from {
      stroke-dashoffset: 0px;
    }
    to {
      stroke-dashoffset: 113px;
    }
  }
`

const Countdown = () => {
  return (
    <CountdownCont>
      <CountdownNumber />
      <CountdownSVG>
        <circle className='circle' r='8' cx='10' cy='10' />
      </CountdownSVG>
    </CountdownCont>
  )
}

export default Countdown
