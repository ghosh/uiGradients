import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 170px;
  width: 100%;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  padding: 10px;
  margin-bottom: 10px;

 @media (${ props => props.theme.breakpoints.xl }) {
    height: 180px;
  }

 @media (${ props => props.theme.breakpoints.xxl }) {
    height: 240px;
  }
`

const Palette = styled.div.attrs(({ colors }) => ({
  style: {
    background: `linear-gradient(to right, ${ colors })`
  }
}))`
  background-color: slateblue;
  position: absolute;
  top: 14px;
  left: 10px;
  bottom: 22px;
  right: 10px;
  border-radius: 4px;
`

const Info = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  color: #F5F7FA;
  font-size: 14px;
`

const Gradient = React.forwardRef((props, ref) => {
  const { gradient } = props
  const colors = [...gradient.colors].join(', ')

  return (
    <Wrapper>
      <Palette
        colors={colors}
      />
      <Info>
        <p>{gradient.name}</p>
      </Info>
    </Wrapper>
  )
})

Gradient.displayName = 'Gradient'

Gradient.propTypes = {
  gradient: PropTypes.object.isRequired
}

export default Gradient
