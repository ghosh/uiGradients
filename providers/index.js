import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './AuthProvider'
import { GradientProvider } from './GradientProvider'

import GlobalStyle from '../GlobalStyle'
import Theme from '../theme'

const AppProvider = ({ children }) => {
  return (
    <>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <GradientProvider>
          {children}
        </GradientProvider>
      </AuthProvider>
    </ThemeProvider>
    </>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node
}

export default AppProvider
