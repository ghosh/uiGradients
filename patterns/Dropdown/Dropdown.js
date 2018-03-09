import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const DropdownBase = styled.div`
  position: relative;
`

class Dropdown extends PureComponent {
  constructor (props) {
    super(props)
    this.state = { visible: false }
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  toggleDropdown () {
    this.setState({ visible: !this.state.visible })
  }

  render () {
    const { children } = this.props

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {
        toggleDropdown: this.toggleDropdown,
        dropdownActive: this.state.visible
      }))

    return (
      <DropdownBase>
        {childrenWithProps}
      </DropdownBase>
    )
  }
}

Dropdown.propTypes = {
  children: PropTypes.node
}

Dropdown.defaultProps = {
  children: null
}

export default Dropdown
