import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  background-color: #F1F4F7;
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 12px;
  border-radius: 4px;
  cursor: pointer;
`

const Byline = styled.p`
  color: #373737;
  font-size: 14px;
  margin: 0;
  margin-right: 4px;
  line-height: 1;
`

const Sort = styled.p`
  color: #2d2d2d;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  line-height: 1;
`

const Sortbar = () => {
  return (
    <Bar>
      <Byline>Sort by</Byline>
      <Sort>Recency</Sort>
    </Bar>
  )
}

export default Sortbar
