import React, { Component, Fragment } from 'react'

import Head from '@/components/Head'
import Header from '@/components/Header'

class HeaderContainer extends Component {
  render () {
    return (
      <Fragment>
        <Head title='uiGradients - Beautiful gradients for designers and developers' />
        <Header />
      </Fragment>
    )
  }
}

export default HeaderContainer
