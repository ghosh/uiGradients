import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseSpacing = styled.div`
  display: inline-block;
  width: 1px;
  height: 1px;
  margin-top: ${props => props.top ? `${props.top}px` : 'initial'};
  margin-bottom: ${props => props.bottom ? `${props.bottom}px` : 'initial'};
  margin-left: ${props => props.left ? `${props.left}px` : 'initial'};
  margin-right: ${props => props.right ? `${props.right}px` : 'initial'};

  padding-top: ${props => props.top ? `${props.top}px` : 'initial'};
  padding-bottom: ${props => props.bottom ? `${props.bottom}px` : 'initial'};
  padding-left: ${props => props.left ? `${props.left}px` : 'initial'};
  padding-right: ${props => props.right ? `${props.right}px` : 'initial'};
`

const Spacing = (props) => {
  return (
    <BaseSpacing {...props} />
  )
}

Spacing.propTypes = {
  children: PropTypes.node
}

Spacing.defaultProps = {
  children: null
}

export default Spacing
