import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Palette = styled.li`
  flex: 0 1 33.33%;
  box-sizing: border-box;
  padding: 10px;
  transition: all .1s ease-in-out;
  cursor: pointer;

  /* &:hover {
    background-color: #222;
    border-radius: 3px;
    transform: scale(1.02);

    p {
      border-bottom: 1px solid hsla(0,0%,92%,.49);
    }
  } */
`

const PaletteList = (props) => {
  return (
    <Palette>
      {props.children}
    </Palette>
  )
}

PaletteList.propTypes = {
  children: PropTypes.node
}

PaletteList.defaultProps = {
  children: null
}

export default PaletteList
