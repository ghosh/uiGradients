import React, { PureComponent } from 'react'
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
`

const Fieldset = styled.fieldset`
  margin-bottom: 25px;
`

const Button = styled.input`
  border-radius: 2px;
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: 400;
  background-color: #359df0;
  color: #fff;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(36,129,215,0.1), 0 3px 6px rgba(36,129,215,0.08);
    text-decoration: none;
    transition: transform .2s ease;
  }
`

class LoginForm extends PureComponent {
  render () {
    return (
      <Container>
        <LogoContainer>
          <Logo width='154' height='78' />
        </LogoContainer>
        <FormContainer>
          <FormHeading>
            Welcome back!
          </FormHeading>
          <form action='#'>
            <Fieldset>
              <Label htmlFor='email'>Email</Label>
              <Input type='email' id='email' name='email' />
            </Fieldset>
            <Fieldset>
              <Label htmlFor='password'>Password</Label>
              <Input type='password' id='password' name='password' />
            </Fieldset>
            <Button type='button' value='Log me in' />
          </form>
        </FormContainer>
      </Container>
    )
  }
}

export default LoginForm
