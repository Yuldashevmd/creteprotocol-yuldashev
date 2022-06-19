import React from 'react';
import { Container, FooterBottom, InputDiv, Wrapper } from './style';
import {ReactComponent as LogoFooter} from '../../assets/footer.svg';
import {ReactComponent as Instagramm} from '../../assets/logo/Instagram-Fill.svg';
import {ReactComponent as Ball} from '../../assets/logo/ball.svg';
import {ReactComponent as Medium} from '../../assets/logo/medium.svg';
import {ReactComponent as Twitter} from '../../assets/logo/twitter.svg';
import {ReactComponent as Figma} from '../../assets/logo/figma.svg';
import {ReactComponent as ArrowRight} from '../../assets/logo/arrowright.svg';

const Footer = () => {
  return (
    <>
    <Container>
      <Wrapper>
        {/* logo part */}
        <Wrapper.LogoLeft>
          <Wrapper.LogoLeft.Up>
            <LogoFooter  className='logofooter'/>
            <p>A revolutionary creator platform structured upon a create-to-earn (C2E) economy that integrates NFT's further into the metaverse and blockchain.</p>
          </Wrapper.LogoLeft.Up>
          <h2>Join Create community</h2>
          <Wrapper.LogoLeft.Logo>
            <Instagramm className='logo'/>
            <Ball className='logo'/>
            <Medium className='logo'/>
            <Twitter className='logo'/>
            <Figma className='logo'/>
          </Wrapper.LogoLeft.Logo>
        </Wrapper.LogoLeft>
        {/* content part */}
        <Wrapper.Content>
          <Wrapper.Content.Block>
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
          </Wrapper.Content.Block>
          <Wrapper.Content.Block>
          <h2>Resources</h2>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
          </Wrapper.Content.Block>
          <Wrapper.Content.Block>
          <h2>Get the latest updates</h2>
          <p>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
         <InputDiv>
          <input type="text" />
          <ArrowRight className='arrow'/>
         </InputDiv>
          </Wrapper.Content.Block>
        </Wrapper.Content>
      </Wrapper>
    </Container>
      {/* footerbottom */}
      <Container height='small'>
      <FooterBottom>
        <p>Copyright © 2022, All Right Reserved CreateProtocol</p>
      </FooterBottom>
      </Container>
    </>
  );
};

export default Footer;