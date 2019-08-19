import React from 'react'

import ActionItems from '@features/ActionItems'

import {
  Bar,
  Actions,
  Swatches,
  Menu
} from './ActionBar.style'

const ActionBar = () => {
  return (
    <Bar>
      <Actions>
        <ActionItems />
      </Actions>

      <Swatches>
        Swatches
      </Swatches>

      <Menu>
        Menu
      </Menu>
    </Bar>
  )
}

export default ActionBar
