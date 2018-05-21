import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'

import { firebase } from '@/firebase'

import { exists } from '@/helpers/utils'

import { LoginUser, LogoutUser } from '@/actions/authActions'

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

        if (!exists(this.props.user)) {
          this.props.LoginUser(U)
        }
      } else {
        Cookies.remove('user')
        this.props.LogoutUser()
      }
    })
  }

  render () {
    const user = this.props.user
    const isAuthenticated = exists(user)

    return (
      <div>
        {this.props.children(user, isAuthenticated)}
      </div>
    )
  }
}

listenForAuth.propTypes = {
  children: PropTypes.func,
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
