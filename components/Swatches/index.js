import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

const Swatch = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 3px 6px;
  border-radius: 3px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #eceaea;
  }
`

const SwatchPallete = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  background-color: #32c4da;
  margin-right: 5px;

  /* Adapt the colours based on prop */
  background-color: ${props => props.color};

`

const SwatchColor = styled.span`
  font-family: "SF Mono Regular", "Source Code Pro", Consolas, monospace;
  font-size: 15px;
`

const ArrowContainer = styled.span`
  margin-top: 1px;
`

const Swatches = (props) => {
  return (
    <SwatchesContainer>
      {props.colors.map((color, index) => {
        return (
          <Fragment>
            <Swatch>
              <SwatchPallete color={color} />
              <SwatchColor>
                {color}
              </SwatchColor>
            </Swatch>

            {index !== props.colors.length - 1 && (
              <Fragment>
                <Spacing left={3} />
                <ArrowContainer>
                  <Arrow height='11' width='14' />
                </ArrowContainer>
                <Spacing left={3} />
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
