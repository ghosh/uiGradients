import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { auth } from '@/firebase'

import { exists } from '@@/utils'

import { LoginUser, LogoutUser } from './actions'

class listenForAuth extends Component {
  componentDidMount () {
    auth.onAuthStateChanged(user => {
      if (user) {
        const U = {
          'name': user.displayName,
          'email': user.email,
          'photoUrl': user.photoURL,
          'emailVerified': user.emailVerified,
          'uid': user.uid
        }
        this.props.LoginUser(U)
      } else {
        this.props.LogoutUser()
      }
    })
  }

  render () {
    const isAuthenticated = exists(this.props.user)
    return (
      <div>
        {this.props.children(this.props.user, isAuthenticated)}
      </div>
    )
  }
}

listenForAuth.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object,
  LoginUser: PropTypes.func,
  LogoutUser: PropTypes.func
}

listenForAuth.defaultProps = {
  children: null,
  user: {},
  LoginUser: () => { },
  LogoutUser: () => { }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    LoginUser,
    LogoutUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(listenForAuth)
