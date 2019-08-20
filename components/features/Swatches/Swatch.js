import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Warapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 12px;
  cursor: pointer;

  &:hover {
    background-color: #E4EBF2;
  }
`

const Palette = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${ props => props.color || '#eaeaea' };;
  margin-right: 4px;
`

const Color = styled.p`
  font-family: "SF Mono," Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  margin: 0;
  font-size: 13px;
  letter-spacing: 1px;
  color: #373737;
`

const Swatch = ({ color }) => {
  return (
    <Warapper color={color} >
      <Palette color={color} />
      <Color>
        {color}
      </Color>
    </Warapper>
  )
}

Swatch.propTypes = {
  color: PropTypes.string
}

export default Swatch
