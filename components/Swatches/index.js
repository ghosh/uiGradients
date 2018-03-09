import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Swatch from '@/components/Swatch'
import Spacing from '@/patterns/Spacing'
import Arrow from './icons/arrow.svg'

const SwatchesContainer = styled.ul`
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

const Swatches = (props) => {
  return (
    <SwatchesContainer>
      {props.colors.map((color, index) => {
        return (
          <Fragment key={ color + index }>
            <Swatch color={ color } />

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

    </SwatchesContainer>
  )
}

Swatches.propTypes = {
  colors: PropTypes.array.isRequired
}

export default Swatches
