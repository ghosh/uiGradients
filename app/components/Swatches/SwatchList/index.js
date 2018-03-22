import React, { PureComponent, Children } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  align-items: center;
`

const Label = styled.p`
  font-size: 15px;
  color: #fff;
  margin-right: 8px;
  -webkit-font-smoothing: antialiased;
`

class SwatchList extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      activeColor: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (color, palette) {
    if (color === this.state.activeColor) {
      this.setState({activeColor: null})
      this.props.handleClick(null)
      return
    }

    this.setState({ activeColor: color })
    this.props.handleClick(palette)
  }

  render () {
    const { children } = this.props

    const childrenWithProps = Children.map(children, child =>
      React.cloneElement(child, {
        activeColor: this.state.activeColor,
        handleClick: this.handleClick
      })
    )

    return (
      <List>
        <Label>Filter by color:</Label>
        {childrenWithProps}
      </List>
    )
  }
}

SwatchList.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default SwatchList
