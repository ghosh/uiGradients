import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Spacing from '@/patterns/Spacing'

import HexItem from '../HexItem'
import Arrow from './icons/arrow.svg'

const HexContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

const ArrowContainer = styled.span`
  margin-top: 4px;
`

const HexList = (props) => {
  return (
    <HexContainer>
      {props.colors.map((color, index) => {
        return (
          <Fragment key={ color + index }>
            <HexItem color={ color } />

            {index !== props.colors.length - 1 && (
              <Fragment>
                <Spacing left={ 3 } />
                <ArrowContainer>
                  <Arrow height='16' width='16' />
                </ArrowContainer>
                <Spacing left={ 3 } />
              </Fragment>
            )}
          </Fragment>
        )
      })}

    </HexContainer>
  )
}

HexList.propTypes = {
  colors: PropTypes.array.isRequired
}

export default HexList
