import React from 'react'

import ActionItems from '@features/ActionItems'
import Swatches from '@features/Swatches'
import Navbar from '@features/Navbar'

import {
  Bar,
  Actions,
  Palettes,
  Menu
} from './ActionBar.style'

const ActionBar = () => {
  return (
    <Bar>
      <Actions>
        <ActionItems />
      </Actions>

      <Palettes>
        <Swatches />
      </Palettes>

      <Menu>
        <Navbar />
      </Menu>
    </Bar>
  )
}

export default ActionBar
