import React from 'react'

import Spacer from '@lib/Spacer'

import Swatch from './Swatch'

import { ReactComponent as Arrow } from './icons/arrow.svg'

const Swatches = () => {
  return (
    <>
      <Swatch color="#514a9d"/>
      <Spacer mr={1} />
      <Arrow stroke="#373737" />
      <Spacer mr={1} />
      <Swatch color="#69D8E7"/>
    </>
  )
}

export default Swatches
