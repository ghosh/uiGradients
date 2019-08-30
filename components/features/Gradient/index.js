import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 140px;
  width: 100%;
  display: inline-block;
  box-sizing: border-box;
  position: relative;

 @media (${ props => props.theme.breakpoints.xl }) {
    height: 170px;
  }

 @media (${ props => props.theme.breakpoints.xxl }) {
    height: 180px;
  }
`

const Palette = styled.div`
  background-color: slateblue;
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  right: 10px;
  border-radius: 4px;
`

const Gradient = React.forwardRef((props, ref) => {
  return (
    <Wrapper>
      <Palette>
        <p>{props.name}</p>
      </Palette>
    </Wrapper>
  )
})

Gradient.displayName = 'Gradient'

Gradient.propTypes = {
  name: PropTypes.string
}

Gradient.defaultProps = {
  name: 'Gradient'
}

export default Gradient
