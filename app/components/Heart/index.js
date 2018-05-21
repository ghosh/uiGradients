import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

const Button = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  box-sizing: border-box;
`

const CountContainer = styled.div`
  margin-left: 8px;
  margin-top: -1px;
  width: 38px;
  height: 18px;
  position: relative;
  overflow: hidden;
`

const slide = keyframes`
  0 {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, -26px, 0);
  }
`

const CountReel = styled.div`
  position: absolute;
  will-change: transform;

  ${ props =>
    props.hearted &&
    css`
      animation: ${ slide } 0.6s ease-in forwards;
    ` };
`

const Count = styled.p`
  font-size: 16px;
  color: #797979 !important;
  padding-bottom: 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto ,sans-serif;

  color: ${ props => (props.red ? 'red !important' : '#b2b2b2') };
`

const heartbeat = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const blowout = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`

const confetti = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    transform: scale(1.1);
    opacity: 1;
  }
`

const Container = styled.span`
  height: 16px;
  position: relative;
  display: flex;
  align-items: center;
  // background-color: #eaeaea;
  padding: 6px 10px 4px 10px;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    width: 27px;
    height: 27px;
    margin-top: -1px;
    margin-left: -5px;
    border-radius: 100%;
    background: #d83535;
    display: inline-block;
    transform: scale(0);
    will-change: transform;
  }

  &:after {
    content: "";
    position: absolute;
    top: 7px;
    left: 16px;
    width: 2px;
    height: 2px;
    border-radius: 2px;
    box-shadow: 0 -18px 0 #d83535, 12px -12px 0 #d83535, 18px 0 0 #d83535,
      12px 12px 0 #d83535, 0 18px 0 #d83535, -12px 12px 0 #d83535,
      -18px 0 0 #d83535, -12px -12px 0 #d83535;
    transform: scale(0);
    will-change: transform;
  }

  svg {
    fill: #797979;
    will-change: transform;
  }

  ${ props =>
    props.hearted &&
    css`
      &:before {
        animation: ${ blowout } 0.6s ease-in-out;
      }

      svg {
        opacity: 0;
        fill: red;
        animation: ${ heartbeat } 0.4s ease-in-out forwards;
        animation-delay: 0.3s;
      }

      &:after {
        animation: ${ confetti } 0.6s ease-in-out;
        animation-delay: 0.3s;
      }
    ` };
`

class Heart extends PureComponent {
  render () {
    return (
      <Button onClick={ this.props.onClick }>
        <Container hearted={ this.props.hearted }>
          <svg xmlns='http://www.w3.org/2000/svg' width='17' height='15'>
            <path d='M12.4713 0C10.7596 0 9.2698.95 8.5 2.3512 7.73.95 6.2404 0 4.5287 0 2.0274 0 0 2.0277 0 4.5287c0 5.2882 8.5 9.824 8.5 9.824S17 9.817 17 4.529C17 2.0277 14.9726 0 12.4713 0z' />
          </svg>

          <CountContainer>
            <CountReel>
              <Count>{this.props.count}</Count>
            </CountReel>
            {/* <CountReel hearted={ this.props.hearted }>
              <Count>{(this.props.hearted) ? this.props.count - 1 : this.props.count}</Count>
              <Count red>{(this.props.hearted) ? this.props.count : this.props.count + 1}</Count>
            </CountReel> */}
          </CountContainer>
        </Container>
      </Button>
    )
  }
}

Heart.propTypes = {
  count: PropTypes.number,
  hearted: PropTypes.bool,
  onClick: PropTypes.func
}

Heart.defaultProps = {
  count: 0,
  hearted: false,
  onClick: () => { }
}

export default Heart
