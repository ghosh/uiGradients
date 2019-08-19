import styled from 'styled-components'

const Bar = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: solid 1px #DDDDDD;
`

const Actions = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Palettes = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Menu = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

export {
  Bar,
  Actions,
  Palettes,
  Menu
}
