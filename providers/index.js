import React from 'react'
import PropTypes from 'prop-types'

import { AuthProvider } from './AuthProvider'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../GlobalStyle'
import Theme from '../theme'

const AppProvider = ({ children }) => {
  return (
    <>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThemeProvider>
    </>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node
}

export default AppProvider
