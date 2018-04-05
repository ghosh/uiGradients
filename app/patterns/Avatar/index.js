import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BaseAvatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  background-color: #eaeaea;
`

const Avatar = (props) => {
  return (
    <BaseAvatar src={ props.imageUrl } />
  )
}

Avatar.propTypes = {
  imageUrl: PropTypes.string
}

Avatar.defaultProps = {
  imageUrl: ''
}

export default Avatar
