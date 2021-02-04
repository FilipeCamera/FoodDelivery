import React from 'react';

import MobileTres from '../../assets/MobileDois.png';

import { BoxTitle, MobileImage, Title, TitleApre, TitleDesc } from '../../styles/globalStyles';
import { Container } from './styles';

function BoxTres() {
  return (
    <Container>
      <MobileImage src={MobileTres}/>
      <BoxTitle>
        <Title>Checkout</Title>
        <TitleApre>When you done check out and get it delivered.</TitleApre>
        <TitleDesc>When you done check out and get it delivered with ease.</TitleDesc>
      </BoxTitle>
    </Container>
  )
}

export default BoxTres;