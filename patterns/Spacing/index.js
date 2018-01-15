import styled from 'styled-components'

const BaseSpacing = styled.div`
  margin-top: ${props => props.top ? `${props.top}px` : 'initial'};
  margin-bottom: ${props => props.bottom ? `${props.bottom}px` : 'initial'};
  margin-left: ${props => props.left ? `${props.left}px` : 'initial'};
  margin-right: ${props => props.right ? `${props.right}px` : 'initial'};

  padding-top: ${props => props.top ? `${props.top}px` : 'initial'};
  padding-bottom: ${props => props.bottom ? `${props.bottom}px` : 'initial'};
  padding-left: ${props => props.left ? `${props.left}px` : 'initial'};
  padding-right: ${props => props.right ? `${props.right}px` : 'initial'};
`

const Spacing = (props) => {

  return (
    <BaseSpacing {...props}>
      { props.children }
    </BaseSpacing>
  )
}

export default Spacing
