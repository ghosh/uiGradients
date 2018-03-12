import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'

const PaletteContainer = styled.div.attrs({
  style: (props) => ({
    backgroundImage: `linear-gradient(to left, ${ [...props.gradient.colors].join(', ') })`
  })
})`
  height: 150px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`

// const PaletteContainer = styled.div`
//   height: 150px;
//   border-radius: 3px;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   background-image: ${ props =>
//     (exists(props.gradient) && `linear-gradient(to left, ${ [...props.gradient.colors].join(', ') })`) ||
//     'linear-gradient(90deg, #eaeaea, #eaeaea)'
// };
// `

const PaletteName = styled.p`
  text-align: center;
  color: #fff;
  margin: 0;
  padding: 0;
  font-family: Source Code Pro,monospace;
  font-size: 15px;
`

const A = styled.a`
  text-decoration: none;
`

const Palette = ({ gradient, direction }) => {
  return (
    <Link as={ `/g/${ gradient.slug }` } href={ `/?slug=${ gradient.slug }` }>
      <A>
        <PaletteContainer gradient={ gradient }>
          <PaletteName>
            {gradient.name}
          </PaletteName>
        </PaletteContainer>
      </A>
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
