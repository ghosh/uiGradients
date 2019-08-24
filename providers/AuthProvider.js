import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import pick from 'lodash/pick'

import { auth, logout, login } from '../firebase'

// Context
// --------------------------
const AuthContext = React.createContext()

// Provider
const AuthProvider = (props) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      const details = pick(user, ['displayName', 'email', 'photoURL', 'uid'])
      if (user) setUser(details)
      if (!user) setUser(null)
    })
    // Unsubscribe
    return () => unsubscribe()
  }, []) // <-- Run only once

  const context = {
    user: user,
    logout: logout,
    login: login
  }

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node
}

// Consumer
const useAuth = () => {
  const context = React.useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  const { user, logout, login } = context

  return {
    user,
    logout,
    login
  }
}

export { AuthProvider, useAuth }
