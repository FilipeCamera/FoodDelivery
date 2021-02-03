import React from 'react';

import { BoxButton, ButtonApp, ButtonPlay, Container, FoodTitle, ImageMobile, TitleApresentation, TitleDescription } from './styles';

import MobileFood from '../../assets/MobileFood.png';

function Hero() {
  return (
    <Container>
      <FoodTitle>Food app</FoodTitle>
      <TitleApresentation>
        Why stay hungry when you can order form Bella Onojie
      </TitleApresentation>
      <TitleDescription>
        Download the bella onoje’s food app now on 
      </TitleDescription>
      <BoxButton>
        <ButtonPlay>Playstore</ButtonPlay>
        <ButtonApp>App store</ButtonApp>
      </BoxButton>
      <ImageMobile src={MobileFood}/>
    </Container>
  )
}


export default Hero;