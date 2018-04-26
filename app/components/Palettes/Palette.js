import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'

import Heart from '@/components/Heart'

const PaletteContainer = styled.div.attrs({
  style: (props) => ({
    backgroundImage: `linear-gradient(to left, ${ [...props.gradient.colors].join(', ') })`
  })
})`
  height: 180px;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PaletteName = styled.p`
  color: #fff;
  margin: 0;
  padding: 0;
  font-family: Source Code Pro,monospace;
  font-size: 15px;
`

const A = styled.a`
  text-decoration: none;
`

const PaletteInfo = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #292929;
  border-radius: 0 0 8px 8px;
  padding: 0 0 0 15px;
`

const PaletteHeartCount = styled.div`
  color: #fff;
  margin: 0;
  padding: 0;
  font-family: Source Code Pro,monospace;
  font-size: 15px;
  margin-top: 2px;
`

class Palette extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      hearted: this.props.isFaved
    }

    this.onHeart = this.onHeart.bind(this)
  }

  onHeart () {
    if (this.state.hearted) {
      this.props.onUnfav(this.props.gradient.slug)
    } else {
      this.props.onFav(this.props.gradient.slug)
    }
    this.setState({
      hearted: !this.state.hearted
    })
  }

  render () {
    const { gradient } = this.props
    const heartCount = (gradient.favs) ? Object.keys(gradient.favs).length : 0

    return (
      <Fragment>
        <Link as={ `/g/${ gradient.slug }` } href={ `/?slug=${ gradient.slug }` }>
          <A>
            <PaletteContainer gradient={ gradient } />
          </A>
        </Link>
        <PaletteInfo>
          <PaletteName>
            {gradient.name}
          </PaletteName>
          <PaletteHeartCount>
            <Heart hearted={ this.state.hearted } onClick={ this.onHeart } count={ heartCount } />
          </PaletteHeartCount>
        </PaletteInfo>
      </Fragment>
    )
  }
}

Palette.propTypes = {
  isFaved: PropTypes.bool,
  onUnfav: PropTypes.func,
  onFav: PropTypes.func,
  gradient: PropTypes.object
}

Palette.defaultProps = {
  isFaved: false,
  onUnfav: () => {},
  onFav: () => {},
  gradient: {}
}

export default Palette
