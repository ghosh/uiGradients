import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Modal from '@/patterns/Modal'
import Countdown from '@/patterns/Countdown'
import CodeBlock from '@/patterns/CodeBlock'

const ModalContainer = styled.div`
  position: relative;
  height: 105px;
  background-color: #F9FAFC;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalText = styled.p`
  font-size: 18px;
  line-height: 1.5;
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

const SuccessMessageCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

class CodeModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      copied: false
    }
    this.onCopy = this.onCopy.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  componentWillUnmount () {
    this.setState({ copied: false })
  }

  onCopy () {
    // wait for timeout to complete
    if (this.state.copied === true) return

    this.setState({ copied: true })

    // show success message for 2s
    setTimeout(() => {
      this.setState({ copied: false })
    }, 2000)
  }

  onClose () {
    this.setState({ copied: false })
    this.props.handleClose()
  }

  showSuccessMessage () {
    const messages = [
      '👊 You got it! Go make something awesome.',
      '👌 Excellent Choice! It\'ll look amazing.',
      '🙌 Very well, master.',
      '✌️ Nice one! You have good taste.',
      '👍 Done. Go for it.'
    ]
    const { length } = messages
    const randomMessage = Math.round(Math.random() * (length - 1))
    return messages[randomMessage]
  }

  render () {
    let GradientCSS = '...'
    if (this.props.gradient.colors) {
      const colorFallback = this.props.gradient.colors[0]
      const colorList = [...this.props.gradient.colors].join(', ')
      const direction = this.props.direction

      GradientCSS = `background: ${ colorFallback };  /* fallback for old browsers */
    background: -webkit-linear-gradient(${ direction }, ${ colorList });  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(${ direction }, ${ colorList }); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`
    }

    return (
      <Modal title='Copy CSS' in={ this.props.in } handleClose={ this.onClose }>
        <ModalContainer>
          {!this.state.copied && <CodeBlock gradient={ this.props.gradient } direction={ this.props.direction } />}
          {this.state.copied && <SuccessMessageCont><ModalText>{this.showSuccessMessage()}</ModalText><Countdown /></SuccessMessageCont>}
        </ModalContainer>
        <CopyToClipboard text={ GradientCSS } onCopy={ this.onCopy }>
          <ModalButton>
            Click to copy
          </ModalButton>
        </CopyToClipboard>
      </Modal>
    )
  }
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
