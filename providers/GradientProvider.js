import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { store } from '../firebase'

// Context
// --------------------------
const GradientContext = React.createContext()

// Provider
const GradientProvider = (props) => {
  const [gradients, setGradients] = useState(null)

  useEffect(() => {
    console.log('Fetching from provider')
    const fetch = async () => {
      const data = await store.gradients()
      setGradients(data)
    }
    fetch()
  }, []) // <-- Run only once

  const context = {
    gradients: gradients
  }

  return (
    <GradientContext.Provider value={context}>
      {props.children}
    </GradientContext.Provider>
  )
}

GradientProvider.propTypes = {
  children: PropTypes.node
}

// Consumer
const useGradients = () => {
  const context = React.useContext(GradientContext)

  if (!context) {
    throw new Error('useGradients must be used within an GradientProvider')
  }

  const { gradients } = context

  return {
    gradients
  }
}

export { GradientProvider, useGradients }
