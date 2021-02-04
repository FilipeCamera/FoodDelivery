import React from 'react';

import MobileRegisterImage from '../../assets/MobileZero.png';

import {Container } from './styles';

import {BoxTitle, Title, TitleApre, TitleDesc, MobileImage} from '../../styles/globalStyles';

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