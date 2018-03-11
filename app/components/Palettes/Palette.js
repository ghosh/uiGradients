import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'

import { exists } from '@@/utils'

const PaletteContainer = styled.div`
  height: 150px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: ${ props =>
    (exists(props.gradient) && `linear-gradient(to left, ${ [...props.gradient.colors].join(', ') })`) ||
    'linear-gradient(90deg, #eaeaea, #eaeaea)'
};
`

const PaletteName = styled.p`
  text-align: center;
  color: #fff;
  margin: 0;
  padding: 0;
  font-family: Source Code Pro,monospace;
  font-size: 15px;

  &:hover {
    border-bottom: 1px solid hsla(0,0%,92%,.49);
  }
`

const Palette = ({ gradient, direction }) => {
  return (
    <Link href={ `/g/${ gradient.slug }` }>
      <a>
        <PaletteContainer gradient={ gradient }>
          <PaletteName>
            {gradient.name}
          </PaletteName>
        </PaletteContainer>
      </a>
    </Link>
  )
}

Palette.propTypes = {
  direction: PropTypes.string,
  gradient: PropTypes.object
}

Palette.defaultProps = {
  direction: 'to left',
  gradient: {}
}

export default Palette
