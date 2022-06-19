import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Section from '../components/section';
import SectionSecond from '../components/sectionSecond';
import SingUp from '../components/signUp';
import { Container } from './style';



const Root = () => {
  return (
    <Container>
      <SingUp/>
      <Header/>
      <Section/>
      <SectionSecond/>
      <Footer/>
    </Container>
  )
};

export default Root;