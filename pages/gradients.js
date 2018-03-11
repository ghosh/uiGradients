import React from 'react'

import { reduxPage } from '@/store'

import Header from '@/containers/Header'
import GradientsContainer from '@/containers/Gradients'

const Gradients = (props) => {
  return [
    <Header />,
    <GradientsContainer />
  ]
}

export default reduxPage(Gradients)
