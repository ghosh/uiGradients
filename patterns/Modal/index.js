import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import transition from 'styled-transition-group'

const Fade = transition.div.attrs({
  mountOnEnter: true,
  unmountOnExit: true,
  timeout: 300
})`
  &:enter { opacity: 0; }
  &:enter-active {
    opacity: 1;
    transition: opacity .3s ease;
  }
  &:exit { opacity: 1; }
  &:exit-active {
    opacity: 0.01;
    transition: opacity .3s ease;
  }
`

const Slide = transition.div.attrs({
  mountOnEnter: true,
  unmountOnExit: true,
  timeout: 300
})`
  &:enter {
    opacity: 0;
    transform: scale(1.15)
  }
  &:enter-active {
    opacity: 1;
    transform: scale(1);
    transition: transform .3s ease, opacity .3s ease;
  }
  &:exit {
    opacity: 1;
    transform: scale(1);
  }
  &:exit-active {
    opacity: 0;
    transform: scale(.9);
    transition: transform .3s ease, opacity .3s ease;
  }
`

const ModalMask = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
`

const ModalBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  pointer-events: none;
`

const ModalContainer = styled.div`
  width: 540px;
  padding: 40px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  text-align: center;
`

const ModalTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 18px;
`

const Modal = (props) => {
  return [
    <ModalBase>
      <Slide in={ props.in }>
        <ModalContainer>
          <ModalTitle>
            {props.title}
          </ModalTitle>

          {props.children}
        </ModalContainer>
      </Slide>
    </ModalBase>,

    <Fade in={ props.in }>
      <ModalMask onClick={ props.handleClose } />
    </Fade>
  ]
}

Modal.propTypes = {
  in: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  handleClose: PropTypes.func
}

Modal.defaultProps = {
  in: 'false',
  title: '',
  children: null,
  handleClose: () => {}
}

export default Modal
