import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'

import { firebase } from '@/firebase'

import { exists } from '@@/utils'

import { LoginUser, LogoutUser } from './actions'

class listenForAuth extends Component {
  componentDidMount () {
    firebase.auth.onAuthStateChanged(user => {
      if (user) {
        const U = {
          'name': user.displayName,
          'email': user.email,
          'photoUrl': user.photoURL,
          'emailVerified': user.emailVerified,
          'uid': user.uid
        }
        Cookies.set('user', U)
        this.props.LoginUser(U)
      } else {
        Cookies.remove('user')
        this.props.LogoutUser()
      }
    })
  }

  render () {
    const serverUser = exists(this.props.serverUser) ? JSON.parse(this.props.serverUser) : null
    const clientUser = this.props.clientUser

    const isAuthenticated = exists(serverUser || clientUser)

    const user = exists(serverUser) ? serverUser : clientUser

    return (
      <div>
        {this.props.children(user, isAuthenticated)}
      </div>
    )
  }
}

listenForAuth.propTypes = {
  children: PropTypes.func,
  clientUser: PropTypes.object,
  serverUser: PropTypes.string,
  LoginUser: PropTypes.func,
  LogoutUser: PropTypes.func
}

listenForAuth.defaultProps = {
  children: null,
  clientUser: {},
  serverUser: null,
  LoginUser: () => { },
  LogoutUser: () => { }
}

const mapStateToProps = (state, ownProps) => {
  return {
    clientUser: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    LoginUser,
    LogoutUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(listenForAuth)
