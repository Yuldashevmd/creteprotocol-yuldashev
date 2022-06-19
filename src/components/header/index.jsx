import React from 'react';
import { Block, Container, GroupBtn, LeftTextSide, RightFrameSide, Ul, Wrapper } from './style';
import {ReactComponent as Logo} from '../../assets/Logo.svg';
import {ReactComponent as TextLogo} from '../../assets/textlogo.svg';
import {ReactComponent as Iframe} from '../../assets/video.svg';
import {ReactComponent as Vector} from '../../assets/Vector.svg';

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Block>
          <Logo className='logo'/>
          <Ul>
            <Ul.Li>Home</Ul.Li>
            <Ul.Li>Developer</Ul.Li>
            <Ul.Li>Creator</Ul.Li>
            <Ul.Li>Ecosystem</Ul.Li>
            <Ul.Li>About us</Ul.Li>
            <Ul.Li>Resources</Ul.Li>
            <Ul.Btn>Whitepaper</Ul.Btn>
          </Ul>
        </Block>
        <Block>
          <LeftTextSide>
            <TextLogo className='textlogo'/>
            <p>First Decentralized Create To Earn Economy</p>
            <ul>
              <li>Decentralized Creations</li>
              <li>Suite of API's and smart contracts.</li>
              <li>The CREATE REVOLUTION</li>
            </ul>
            <GroupBtn>
              <button>Buy CR8 Token</button>
              <button>join community</button>
            </GroupBtn>
          </LeftTextSide>
          <RightFrameSide>
              <Iframe style={{cursor:'pointer'}} className='iframe'/>
          </RightFrameSide>
        </Block>
      </Wrapper>
      <Vector className='vector'/>
    </Container>
  );
};

export default Header;