import React from 'react';

import MobileDois from '../../assets/MobileUm.png';

import { BoxTitle, MobileImage, Title, TitleApre, TitleDesc } from '../../styles/globalStyles';

import {Container} from './styles';

function BoxDois() {
  return(
    <Container>
      <BoxTitle>
        <Title>Explore while shopping</Title>
        <TitleApre>Shop for your favorites meal as e dey hot.</TitleApre>
        <TitleDesc>Shop for your favorite meals or drinks and enjoy while doing it.</TitleDesc>
      </BoxTitle>
      <MobileImage src={MobileDois}/>
    </Container>
  )
}

export default BoxDois;