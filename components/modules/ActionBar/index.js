import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ActionItems from '@features/ActionItems'
import Swatches from '@features/Swatches'
import Navbar from '@features/Navbar'

const ActionBar = () => {
  const Bar = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: solid 1px #DDDDDD;

  overflow-x: scroll;
    @media (${ props => props.theme.breakpoints.md }) {
      overflow: hidden;
    }
`

  const Actions = styled.div`
    display: none;
    /* shows md onwards */
    @media (${ props => props.theme.breakpoints.xl }) {
      flex: 1;
      display: flex;
      align-items: center;
    }
  `

  const Palettes = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  const Menu = styled.div`
    display: none;
    /* shows md onwards */
    @media (${ props => props.theme.breakpoints.xl }) {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  `

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

ActionBar.propTypes = {
  theme: PropTypes.object
}

export default ActionBar
