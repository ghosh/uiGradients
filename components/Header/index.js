import styled from 'styled-components';

import Button from '../Button';
import Spacing from '../../lib/Spacing';

import Logo from './icons/logo.svg';

const HeaderBar = styled.header`
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
  flex: 1;
`;

const Header = () => {
  return (
    <HeaderBar>
      <Flex>
        <Spacing right={5}>
          <Button social="twitter" label="Twitter" />
        </Spacing>
        <Button social="facebook" label="Facebook" />
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
