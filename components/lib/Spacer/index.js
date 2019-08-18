import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Space = styled.div`
  height: 1px;
  content: ${ props => `${ props.mr }px` };
  margin-top: ${ props => `${ props.mt * 4 }px` };
  margin-left: ${ props => `${ props.ml * 4 }px` };
  margin-bottom: ${ props => `${ props.mb * 4 }px` };
  margin-right: ${ props => `${ props.mr * 4 }px` };
  padding-top: ${ props => `${ props.pt * 4 }px` };
  padding-left: ${ props => `${ props.pl * 4 }px` };
  padding-bottom: ${ props => `${ props.pb * 4 }px` };
  padding-right: ${ props => `${ props.pr * 4 }px` };
`

const Spacer = (props) => {
  return (
    <Space {...props}/>
  )
}

Spacer.propTypes = {
  mt: PropTypes.number,
  ml: PropTypes.number,
  mb: PropTypes.number,
  mr: PropTypes.number,
  pt: PropTypes.number,
  pl: PropTypes.number,
  pb: PropTypes.number,
  pr: PropTypes.number
}

Spacer.defaultProps = {
  mt: 0,
  ml: 0,
  mb: 0,
  mr: 0,
  pt: 0,
  pl: 0,
  pb: 0,
  pr: 0
}

export default Spacer
