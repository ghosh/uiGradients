import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PropTypes from 'prop-types'

import { db } from '@/firebase'
import { FavGradient, UnFavGradient } from './actions'

import { PaletteWrapper, PaletteList, PaletteItem, Palette } from '@/components/Palettes'

import { getActiveUser } from '@/selectors'

class PaletteContainer extends Component {
  constructor (props) {
    super(props)

    this.handleGradientFav = this.handleGradientFav.bind(this)
    this.handleGradientUnfav = this.handleGradientUnfav.bind(this)
  }

  handleGradientFav (gradientSlug) {
    this.props.FavGradient(gradientSlug, this.props.user.uid)
  }

  handleGradientUnfav (gradientSlug) {
    this.props.UnFavGradient(gradientSlug, this.props.user.uid)
  }

  render () {
    return (
      <PaletteWrapper>
        <PaletteList>
          {this.props.gradients.map(gradient => {
            let isFaved = false
            if (gradient.favs && this.props.user) {
              isFaved = Object.keys(gradient.favs).includes(this.props.user.uid)
            }
            return (
              <PaletteItem key={ gradient.id }>
                <Palette
                  gradient={ gradient }
                  onFav={ this.handleGradientFav }
                  onUnfav={ this.handleGradientUnfav }
                  isFaved={ isFaved }
                />
              </PaletteItem>
            )
          })}
        </PaletteList>
      </PaletteWrapper>
    )
  }
}

PaletteContainer.propTypes = {
  user: PropTypes.object,
  gradients: PropTypes.array
}

PaletteContainer.defaultProps = {
  user: {},
  gradients: []
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: getActiveUser(state)
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    FavGradient,
    UnFavGradient
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PaletteContainer)
