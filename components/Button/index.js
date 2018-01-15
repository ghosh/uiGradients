import styled from 'styled-components'

const BaseButton = styled.button`
  border-radius: 2px;
  color: #fff;
  font-weight: 600;
  padding: 0 10px;
  text-decoration: none;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  transition: background-color .2s ease-in-out;

  /* Adapt the colours based on prop */
  background: ${props => {
    switch (props.social) {
      case 'twitter':
        return '#2aa3ef'
        break;
      case 'facebook':
        return '#3d5a96'
        break;
      default:
        return '#333'
    }
  }};
}
`

const Button = (props) => {

  return (
    <BaseButton {...props}>
      <span>{props.label}</span>
    </BaseButton>
  )
}

export default Button
