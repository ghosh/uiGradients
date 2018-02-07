import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Swatches from '@/components/Swatches'
import Actionbar from '@/components/Actionbar'

const BumperBase = styled.section`
  padding: 0 20px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #eaeaea;

  > * {
    flex: 1;
  }
`

const Bumper = (props) => {
  return (
    <BumperBase>
      <div />
      {props.gradient.colors && <Swatches colors={props.gradient.colors} />}
      <Actionbar />
    </BumperBase>
  )
}

Bumper.propTypes = {
  gradient: PropTypes.object.isRequired
}

export default Bumper
