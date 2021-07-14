import React from 'react'
import styled, { css } from 'styled-components'

interface DividerProps {
  mx?: number
}

const isNumber = (n: any) => {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}

const Divider = styled.div<DividerProps>`
  display: inline-block;
  height: 12px;
  width: 1px;
  background-color: #BBC7D1;
  margin-top: 3px;

  ${({ mx = null }) => mx && isNumber(mx) && css`
    margin-left: ${mx * 4}px;
    margin-right: ${mx * 4}px;
  `};
`

Divider.displayName = 'Divider'

export default Divider