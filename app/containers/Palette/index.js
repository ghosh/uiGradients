import React, { Component } from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

import { db } from '@/firebase'

import { PaletteWrapper, PaletteList, PaletteItem, Palette } from '@/components/Palettes'

import { getActiveUser } from '@/selectors'

class PaletteContainer extends Component {
  constructor (props) {
    super(props)

    this.handleFavClick = this.handleFavClick.bind(this)
  }

  handleFavClick (gradientSlug) {
    db.favGradient(gradientSlug, this.props.user.uid)
  }

  render () {
    return (
      <PaletteWrapper>
        <PaletteList>
          {this.props.gradients.map(gradient => {
            return (
              <PaletteItem key={ gradient.id }>
                <Palette gradient={ gradient } onFav={ this.handleFavClick } />
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

export default connect(mapStateToProps, null)(PaletteContainer)
