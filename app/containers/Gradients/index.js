import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { PaletteContainer, PaletteList, PaletteItem, Palette } from '@/components/Palettes'

class GradientController extends Component {
  render () {
    const { gradients } = this.props
    return (
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
