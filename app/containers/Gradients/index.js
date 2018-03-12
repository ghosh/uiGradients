import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Filter from '@/components/Filter'
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
          <Filter />
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
