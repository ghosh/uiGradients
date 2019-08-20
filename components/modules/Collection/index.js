import React from 'react'
import styled from 'styled-components'

import Filterbar from '@features/Filterbar'
import Sortbar from '@features/Sortbar'

const Box = styled.div`
  /* 90 = 48 + 40 + 1 + 1 */
  /* Box = Header + Action bar + 2 1px borders */
  height: calc(100vh - 90px);
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const FilterPane = styled.section`
  background-color: #fafafa;
  height: 56px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const CollectionPane = styled.section`
  height: calc(100% - 56px);
  overflow: scroll;
`

const Collecton = () => {
  return (
    <Box>
      <FilterPane>
        <Filterbar />
        <Sortbar />
      </FilterPane>
      <CollectionPane />
    </Box>
  )
}

export default Collecton
