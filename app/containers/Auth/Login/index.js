import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import LoginForm from '@/components/Auth/LoginForm'
import { auth, googleAuthProvider } from '@/firebase'

import { LoginUser, LogoutUser } from './actions'

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #333333;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23424242' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`

const GradientContainer = styled.div`
  width: 40vw;
  height: 100vh;
  background: linear-gradient(to right, #c0392b, #8e44ad);
`

const FormWrapper = styled.div`
  width: 60vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

class LoginContainer extends Component {
  constructor (props) {
    super(props)
    this.handeEmailLogin = this.handeEmailLogin.bind(this)
    this.handeGoogleLogin = this.handeGoogleLogin.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  componentDidMount () {
    auth.onAuthStateChanged(user => {
      if (user) {
        const U = {}
        U.name = user.displayName
        U.email = user.email
        U.photoUrl = user.photoURL
        U.emailVerified = user.emailVerified
        U.uid = user.uid
        console.log('Logged in user is:', U)
        this.props.LoginUser(U)
      } else {
        this.props.LogoutUser()
        console.log('No user logged in')
      }
    })
  }

  handeGoogleLogin () {
    auth.signInWithPopup(googleAuthProvider).then(result => {
      const token = result.credential.accessToken
      const user = result.user
      console.log(user, token)
    }).catch(error => {
      console.log(error)
    })
  }

  handeEmailLogin ({ email, password }) {
    auth.createUserWithEmailAndPassword(email, password)
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  handleSignOut () {
    auth.signOut()
  }

  render () {
    return (
      <PageContainer>
        <GradientContainer />
        <FormWrapper>
          <LoginForm
            handeGoogleLogin={ this.handeGoogleLogin }
            handeEmailLogin={ this.handeEmailLogin }
            handleSignOut={ this.handleSignOut }
          />
        </FormWrapper>
      </PageContainer>
    )
  }
}

LoginContainer.propTypes = {
  LoginUser: PropTypes.func,
  LogoutUser: PropTypes.func
}

LoginContainer.defaultProps = {
  LoginUser: () => {},
  LogoutUser: () => {}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    LoginUser,
    LogoutUser
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginContainer)
