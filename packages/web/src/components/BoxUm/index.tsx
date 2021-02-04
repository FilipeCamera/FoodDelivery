import React from 'react';

import MobileRegisterImage from '../../assets/MobileZero.png';

import { BoxTitle, Container, MobileImage, Title, TitleApre, TitleDesc } from './styles';

function BoxUm() {
  return(
    <Container>
        <MobileImage src={MobileRegisterImage}/>
      <BoxTitle>
        <Title>Create an account</Title>
        <TitleApre>Create/login to an existing account to get started</TitleApre>
        <TitleDesc>An account is created with your email and a desired password</TitleDesc>
      </BoxTitle>
    </Container>
  )
}

export default BoxUm;