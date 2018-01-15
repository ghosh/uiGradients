import styled from 'styled-components'
import { darken } from 'polished'

import TwitterIcon from './icons/twitter.svg'
import FacebookIcon from './icons/facebook.svg'

const BaseButton = styled.button`
  cursor: pointer;
  border-radius: 2px;
  color: #fff;
  font-weight: 600;
  padding: 0 10px;
  text-decoration: none;
  height: 30px;
  line-height: 30px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 133px;
  transition: background-color .2s ease-in-out;

  /* Adapt the colours based on prop */
  background-color: ${props =>
  ((props.social === 'twitter') && '#0d95e8') ||
    ((props.social === 'facebook') && '#344e86') ||
    '#333'
  };

  &:hover {
    background-color: ${props =>
  ((props.social === 'twitter') && darken(0.08, '#0d95e8')) ||
    ((props.social === 'facebook') && darken(0.08, '#344e86')) ||
    darken(0.08, '#333')
    };
  }
`

const BaseSpan = styled.span`
  margin-left: 5px;
`

const Button = (props) => {
  return (
    <BaseButton {...props}>
      { props.social === 'twitter' && <TwitterIcon width='14' height='14' fill='#ffffff' /> }
      { props.social === 'facebook' && <FacebookIcon width='14' height='14' fill='#ffffff' /> }
      <BaseSpan>{props.label}</BaseSpan>
    </BaseButton>
  )
}

export default Button
