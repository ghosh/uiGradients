import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { reduxPage } from '@/store'
import { exists } from '@@/utils'

import { db } from '@/firebase'

import Header from '@/containers/Header'
import GradientsContainer from '@/containers/Gradients'
import AuthListener from '@/containers/Auth/Listener'

const Gradients = (props) => {
  return (
    <AuthListener serverUser={ props.user }>
      {(user, isAuthenticated) => (
        <Fragment>
          <Header user={ user } isAuthenticated={ isAuthenticated } key='header' />
          <GradientsContainer key='GradientsContainer' fireGrads={ props.grads } />
        </Fragment>
      )}
    </AuthListener>
  )
}

Gradients.getInitialProps = async ({ req }) => {
  const grads = await db.getGradients()
  let user = exists(req) ? req.cookies.user : null
  return { user, grads }
}

Gradients.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  grads: PropTypes.array
}

Gradients.defaultProps = {
  user: {},
  grads: []
}

export default reduxPage(Gradients)
