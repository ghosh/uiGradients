import React from 'react'
import styled, { css } from 'styled-components'

interface SpacerProps {
  m?: number,
  mx?: number,
  my?: number,
  mt?: number,
  mb?: number,
  mr?: number,
  ml?: number
}

const isNumber = (n: any) => {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}

const Spacer = styled.div<SpacerProps>`
  ${({ m = null }) => m && isNumber(m) && css`
    margin: ${m * 4}px
  `}

  ${({ mx = null }) => mx && isNumber(mx) && css`
    margin-left: ${mx * 4}px;
    margin-right: ${mx * 4}px;
  `};

  ${({ my = null }) => my && isNumber(my) && css`
    margin-top: ${my * 4}px;
    margin-bottom: ${my * 4}px;
  `};

  ${({ mt = null }) => mt && isNumber(mt) && css`
    margin-top: ${mt * 4}px
  `}

  ${({ mb = null }) => mb && isNumber(mb) && css`
    margin-bottom: ${mb * 4}px
  `}

  ${({ ml = null }) => ml && isNumber(ml) && css`
    margin-left: ${ml * 4}px
  `}

  ${({ mr = null }) => mr && isNumber(mr) && css`
    margin-right: ${mr * 4}px
  `}
`

Spacer.displayName = 'Spacer'

export default Spacer