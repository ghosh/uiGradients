import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: block;
  background-color: #333;
  height: calc(100vh - (50px + 70px));
  overflow: scroll;
  box-sizing: border-box;
  /* padding: 0 20px; */
`

const PaletteContainer = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

PaletteContainer.propTypes = {
  children: PropTypes.node
}

PaletteContainer.defaultProps = {
  children: null
}

export default PaletteContainer
