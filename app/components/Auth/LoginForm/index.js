import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Logo from './icons/logo.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const LogoContainer = styled.div`
  text-align: center;
`

const FormContainer = styled.div`
  width: 380px;
  padding: 30px 50px 40px 50px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 25px 0 rgba(113,150,193,0.2);
`

const FormHeading = styled.h2`
  text-align: center;
  color: #333;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
`

const Label = styled.label`
  font-size: 12px;
  color: #373737;
  padding: 0 0 2px 0;
  margin: auto;
  display: block;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Input = styled.input`
  font-size: 14px;
  font-weight: 400;
  border: 1px solid #d6e0f1;
  border-radius: 2px;
  padding: 0 2px 0 10px;
  color: #4c5669;
  width: 100%;
  height: 40px;

  &:focus {
    box-shadow: 0 4px 8px #eff6fd;
  }
`

const Fieldset = styled.fieldset`
  margin-bottom: 25px;
`

const Button = styled.input`
  border-radius: 2px;
  width: 100%;
  height: 45px;
  font-size: 16px;
  font-weight: 400;
  background-color: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(36,129,215,0.1), 0 3px 6px rgba(36,129,215,0.08);
    text-decoration: none;
    transition: transform .2s ease;
  }
`

const GoogleButton = styled.button`
  border-radius: 2px;
  width: 100%;
  height: 45px;
  font-size: 16px;
  font-weight: 400;
  background-color: #dd4b39;
  color: #fff;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(36,129,215,0.1), 0 3px 6px rgba(36,129,215,0.08);
    text-decoration: none;
    transition: transform .2s ease;
  }
`

const SignOutButton = GoogleButton.extend`
  background-color: black;
`

const Divider = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    margin-top: 15px;
    display: inline-block;
    height: 2px;
    width: 100%;
    background-color: #eaeaea;
  }

  span {
    font-size: 15px;
    position: relative;
    z-index: 2;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    font-family: serif;
    font-style: italic;
    color: #969696;
    background-color: #eaeaea;
  }
`

class LoginForm extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.handeEmailLogin(this.state)
  }

  render () {
    return (
      <Container>
        <LogoContainer>
          <Logo width='154' height='78' />
        </LogoContainer>
        <FormContainer>
          <FormHeading>
            Log in
          </FormHeading>

          <GoogleButton onClick={ () => this.props.handeGoogleLogin() }>
            Continue with Google
          </GoogleButton>

          <Divider>
            <span>or</span>
          </Divider>

          <form onSubmit={ this.handleSubmit } >
            <Fieldset>
              <Label htmlFor='email'>Email</Label>
              <Input
                type='email'
                id='email'
                name='email'
                value={ this.state.email }
                onChange={ this.handleChange }
              />
            </Fieldset>
            <Fieldset>
              <Label htmlFor='password'>Password</Label>
              <Input
                type='password'
                id='password'
                name='password'
                value={ this.state.password }
                onChange={ this.handleChange } />
            </Fieldset>
            <Button type='submit' value='Log me in' />

            <SignOutButton onClick={ () => this.props.handleSignOut() }>
              Sign Out
            </SignOutButton>

          </form>
        </FormContainer>
      </Container>
    )
  }
}

LoginForm.displayName = 'LoginForm'

LoginForm.propTypes = {
  handeEmailLogin: PropTypes.func.isRequired,
  handeGoogleLogin: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired
}

export default LoginForm
