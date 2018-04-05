import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Head from '@/components/Head'
import Header from '@/components/Header'

class HeaderContainer extends Component {
  render () {
    return (
      <Fragment>
        <Head title='uiGradients - Beautiful gradients for designers and developers' />
        <Header user={ this.props.user } isAuthenticated={ this.props.isAuthenticated } />
      </Fragment>
    )
  }
}

HeaderContainer.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool
}

HeaderContainer.defaultProps = {
  user: {},
  isAuthenticated: false
}

export default HeaderContainer
