import React from 'react'
import PropTypes from 'prop-types'

import { StoreProvider } from 'easy-peasy'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from './AuthProvider'
import { GradientProvider } from './GradientProvider'

import GlobalStyle from '../GlobalStyle'
import Theme from '../theme'
import store from '../store'

const AppProvider = ({ children }) => {
  return (
    <>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <StoreProvider store={store}>
        <AuthProvider>
          <GradientProvider>
            {children}
          </GradientProvider>
        </AuthProvider>
      </StoreProvider>
    </ThemeProvider>
    </>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node
}

export default AppProvider
