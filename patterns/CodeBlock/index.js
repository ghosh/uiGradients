import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Pre = styled.pre`
  overflow: auto;
  text-align: left;
  font-family: Source Code Pro,Consolas,monospace;
  color: #476da5;
  display: block;
  word-wrap: normal;
  overflow-wrap: normal;
  white-space: pre;
  padding: 1em;
`

const Code = styled.code`
  color: #476da5;
  text-align: left;
  font-size: 14px;
`

const Property = styled.span`
  color: #2aa198;
`

const Spec = styled.span`
  color: #d33682;
`

const Comment = styled.span`
  color: #ababab;
`

const CodeBlock = (props) => {
  const colorFallback = props.gradient.colors[0]
  const colorList = [...props.gradient.colors].join(', ')
  const direction = props.direction
  return (
    <Pre>
      <Code>
        <Property>background</Property>: <Spec>{colorFallback}</Spec>; <Comment>/* fallback for old browsers */</Comment>
        <br />
        <Property>background</Property>: -webkit-linear-gradient({direction}, <Spec>{colorList}</Spec>); <Comment>/* Chrome 10-25, Safari 5.1-6 */</Comment>
        <br />
        <Property>background</Property>: linear-gradient({direction}, <Spec>{colorList}</Spec>); <Comment>/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */</Comment>
      </Code>
    </Pre>
  )
}

CodeBlock.propTypes = {
  gradient: PropTypes.object.isRequired,
  direction: PropTypes.string.isRequired
}

export default CodeBlock
