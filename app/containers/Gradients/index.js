import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SwatchList, Swatch } from '@/components/Swatches'
import { PaletteContainer, PaletteList, PaletteItem, Palette } from '@/components/Palettes'

const Container = styled.div`
  display: flex;
  background-color: #222;
  padding: 20px;
`

class GradientController extends Component {
  render () {
    const { gradients, count } = this.props
    return (
      <Fragment>
        <Container>
          <SwatchList>
            <Swatch color='#c93041' />
            <Swatch color='#d56b31' />
            <Swatch color='#fed130' />
            <Swatch color='#219859' selected />
            <Swatch color='#2bb6de' />
            <Swatch color='#1b5897' />
            <Swatch color='#ed3dd7' />
            <Swatch color='#eaeaea' />
            <Swatch color='#c0c0cb' />
            <Swatch color='#333333' />
          </SwatchList>
        </Container>
        <PaletteContainer>
          <PaletteList>
            {gradients.slice(0).reverse().map(function (gradient) {
              return (
                <PaletteItem key={ gradient.id }>
                  <Palette gradient={ gradient } />
                </PaletteItem>
              )
            })}
          </PaletteList>
        </PaletteContainer>
      </Fragment>
    )
  }
}

GradientController.propTypes = {
  gradients: PropTypes.array,
  count: PropTypes.number
}

GradientController.defaultProps = {
  gradients: {},
  count: null
}

const mapStateToProps = (state, ownProps) => {
  return {
    gradients: state.gradients.list,
    count: state.gradients.count
  }
}

export default connect(mapStateToProps, null)(GradientController)
