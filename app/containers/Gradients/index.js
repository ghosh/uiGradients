import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { mergeArraysByKey } from '@@/utils'

import PaletteContainer from '@/containers/Palette'

import { SwatchList, Swatch } from '@/components/Swatches'

import { setActivePalette } from './actions'
import { getGradientsByPalette } from '@/selectors'

const Container = styled.div`
  display: flex;
  background-color: #292929;
  padding: 20px;
`

class GradientController extends Component {
  render () {
    const { gradients, fireGrads } = this.props
    const mergedGradients = mergeArraysByKey(gradients, fireGrads, 'slug')

    return (
      <Fragment>
        <Container>
          <SwatchList handleClick={ this.props.setActivePalette }>
            <Swatch color='#c93041' palette='Reds' />
            <Swatch color='#d56b31' palette='Oranges' />
            <Swatch color='#fed130' palette='Yellows' />
            <Swatch color='#219859' palette='Greens' />
            <Swatch color='#2bb6de' palette='Cyans' />
            <Swatch color='#1b5897' palette='Blues' />
            <Swatch color='#ed3dd7' palette='Magentas' />
            <Swatch color='#eaeaea' palette='Whites' />
            <Swatch color='#c0c0cb' palette='Grays' />
            <Swatch color='#333333' palette='Blacks' />
          </SwatchList>
        </Container>
        <PaletteContainer gradients={ mergedGradients } />
      </Fragment>
    )
  }
}

GradientController.propTypes = {
  fireGrads: PropTypes.array,
  gradients: PropTypes.array,
  setActivePalette: PropTypes.func
}

GradientController.defaultProps = {
  fireGrads: [],
  gradients: [],
  count: null,
  setActivePalette: () => {}
}

const mapStateToProps = (state, ownProps) => {
  return {
    gradients: getGradientsByPalette(state)
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setActivePalette
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GradientController)
