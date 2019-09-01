import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Box = styled.div.attrs(({ colors }) => ({
  style: {
    background: `linear-gradient(to right, ${ colors })`
  }
}))`
  /* 90 = 48 + 40 + 1 + 1 */
  /* Box = Header + Action bar + 2 1px borders */
  height: calc(100vh - 90px);
  background-color: salmon;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: transform 0.3s ease-in-out;
  transform: translate3d(0,96%,0);
  border-radius: 24px 24px 0 0;
`

const Canvas = ({ gradient }) => {
  const colors = [...gradient.colors].join(', ')
  return (
    <Box colors={colors} />
  )
}

Canvas.propTypes = {
  gradient: PropTypes.object
}

export default Canvas
