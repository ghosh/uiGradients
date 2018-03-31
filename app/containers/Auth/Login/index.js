import React, { Component } from 'react'
import styled from 'styled-components'

import LoginForm from '@/components/Auth/LoginForm'

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
background-color: #333333;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23424242' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`

const GradientContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background: linear-gradient(to right, #c0392b, #8e44ad);
`

const FormWrapper = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

class LoginContainer extends Component {
  render () {
    return (
      <PageContainer>
        <GradientContainer />
        <FormWrapper>
          <LoginForm />
        </FormWrapper>
      </PageContainer>
    )
  }
}

export default LoginContainer
