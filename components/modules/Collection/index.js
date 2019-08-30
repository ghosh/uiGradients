import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'

import Gradient from '@features/Gradient'
import Filterbar from '@features/Filterbar'
import Sortbar from '@features/Sortbar'

const Box = styled.div`
  /* 90 = 48 + 40 + 1 + 1 */
  /* Box = Header + Action bar + 2 1px borders */
  height: calc(100vh - 90px);
  background-color: #ffffff;
  background-color: slategray;
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
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  padding: 10px;
`

const Anchor = styled.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
  flex-basis: 100%;

  @media (${ props => props.theme.breakpoints.sm }) {
    flex-basis: 50%;
  }

  @media (${ props => props.theme.breakpoints.md }) {
    flex-basis: 33.333%;
  }

 @media (${ props => props.theme.breakpoints.lg }) {
    flex-basis: 25%;
  }

 @media (${ props => props.theme.breakpoints.xxl }) {
    flex-basis: 20%;
  }
`

const Collection = ({ gradients }) => {
  return (
    <Box>
      <FilterPane>
        <Filterbar />
        <Sortbar />
      </FilterPane>
      <CollectionPane>
        {
          gradients && gradients.map((gradient, index) => {
            return (
              <Link
                href="/gradient/[id]"
                as={`/gradient/${ gradient.slug }`}
                key={index}
              >
                <Anchor>
                  <Gradient
                    name={gradient.slug}
                  />
                </Anchor>
              </Link>
            )
          })
        }
      </CollectionPane>
    </Box>
  )
}

Collection.propTypes = {
  gradients: PropTypes.array
}

export default Collection
