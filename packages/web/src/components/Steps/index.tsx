import React from 'react';
import { 
  Container, 
  TitleDown, 
  TitleDownDesc, 
  TitleDownDescMob, 
  BoxButton, 
  ButtonApp, 
  ButtonFree, 
  ButtonPlay, 
  ButtonBuy
} from './styles';


function Steps() {
  return(
    <Container>
      <TitleDown>Download the app now.</TitleDown>
      <TitleDownDesc>Available on your favorite store. Start your premium experience now</TitleDownDesc>
      <TitleDownDescMob>Most calendars are designed for teams.</TitleDownDescMob>
      <BoxButton>
        <ButtonPlay>PlayStore</ButtonPlay>
        <ButtonBuy>Buy now</ButtonBuy>
        <ButtonApp>AppStore</ButtonApp>
        <ButtonFree>Try for free</ButtonFree>
      </BoxButton>
    </Container>
  )
}

export default Steps;