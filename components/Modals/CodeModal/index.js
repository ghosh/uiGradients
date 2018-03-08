import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Modal from '@/patterns/Modal'
import CodeBlock from '@/patterns/CodeBlock'

const ModalContent = styled.div`
  height: 105px;
  background-color: #F9FAFC;
  margin-bottom: 20px;
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
      <ModalContent>
        <CodeBlock gradient={ props.gradient } direction={ props.direction } />
      </ModalContent>
      <ModalButton>
        Click to copy
      </ModalButton>
    </Modal>
  )
}

CodeModal.propTypes = {
  in: PropTypes.bool,
  handleClose: PropTypes.func,
  gradient: PropTypes.object.isRequired,
  direction: PropTypes.string.isRequired
}

CodeModal.defaultProps = {
  in: 'false',
  handleClose: () => { }
}

export default CodeModal
