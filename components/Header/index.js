import styled from 'styled-components';

import Button from '../Button';

import Logo from './icons/logo.svg';

const HeaderBar = styled.div`
  padding: 0 20px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #eaeaea;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderBar>
      <Flex>
        <Button social="twitter"/>
        <Button social="facebook"/>
      </Flex>
      <Logo />
      <Flex>
        <p>all gradients</p>
        <p>saved gradients</p>
      </Flex>
    </HeaderBar>
  )
}
 
export default Header;