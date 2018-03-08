import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Modal from '@/patterns/Modal'

const ModalText = styled.p`
  font-size: 15px;
  line-height: 1.5;
  margin-bottom: 22px;
`

const ModalButton = styled.a`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  box-sizing: content-box;
  background-color: #1abc9c;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 25px;
  border-radius: 30px;
  outline: 0!important;
  border: 0;
  transition: all .2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #148f77;
  }
`

const CodeModal = (props) => {
  return (
    <Modal title='Copy CSS' in={ props.in } handleClose={ props.handleClose }>
      <ModalText>
        Adding a gradient is easy. All gradients are read from a gradients.json file which is available in this project's repo. Simply add your gradient details to it and submit a pull request.
      </ModalText>
      <ModalButton>
        Tell me more
      </ModalButton>
    </Modal>
  )
}

CodeModal.propTypes = {
  in: PropTypes.bool,
  handleClose: PropTypes.func
}

CodeModal.defaultProps = {
  in: 'false',
  handleClose: () => {}
}

export default CodeModal
