import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${ reset}
  body {
    background-color: #F1F4F7;
    font: caption;
  }
`

export default GlobalStyle