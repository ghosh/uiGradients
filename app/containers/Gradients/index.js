import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { db } from '@/firebase'

import { SwatchList, Swatch } from '@/components/Swatches'
import { PaletteContainer, PaletteList, PaletteItem, Palette } from '@/components/Palettes'

import { setActivePalette } from './actions'
import { getGradientsByPalette, getActiveUser } from '@/selectors'

const Container = styled.div`
  display: flex;
  background-color: #292929;
  padding: 20px;
`

class GradientController extends Component {
  constructor (props) {
    super(props)

    this.handleFavClick = this.handleFavClick.bind(this)
  }

  handleFavClick (gradientSlug) {
    db.favGradient(gradientSlug, this.props.user.uid)
  }

  render () {
    const { gradients } = this.props
    const handleFavClick = this.handleFavClick

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
        <PaletteContainer>
          <PaletteList>
            {gradients.map(function (gradient) {
              return (
                <PaletteItem key={ gradient.id }>
                  <Palette gradient={ gradient } onFav={ handleFavClick } />
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
  user: PropTypes.object,
  gradients: PropTypes.array,
  setActivePalette: PropTypes.func
}

GradientController.defaultProps = {
  user: {},
  gradients: {},
  count: null,
  setActivePalette: () => {}
}

const mapStateToProps = (state, ownProps) => {
  return {
    gradients: getGradientsByPalette(state),
    user: getActiveUser(state)
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setActivePalette
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GradientController)
