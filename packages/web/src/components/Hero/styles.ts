import styled from 'styled-components';

import FoodBack from '../../assets/foodBackground.png';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  background-image: url(${FoodBack});
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;

  @media(max-width: 768px){
    background-image: none;
    background: #fafafa;
    padding: 2.2rem 0;
  }
`;

export const FoodTitle = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.1px;
  color: #fff;

  @media(max-width: 768px){
    font-size: 16px;
    color: #737373;
  }
`;

export const TitleApresentation = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 3.6rem;
  font-weight: 800;
  color: #fff;
  text-align: center;
  margin: 2rem 0;
  width: 80vw;

  @media(max-width: 768px){
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    color: #252B42;
    width: 100vw;
  }
`;

export const TitleDescription = styled.h3`
  margin: 0 0 2rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;

  @media(max-width: 768px) {
    color: #737373;
    text-align: center;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.6rem 0;
  align-items: center;
  @media(max-width: 768px){
    flex-direction: column;
  }
`;

export const ButtonPlay = styled.a`
  margin: 0 1rem;
  background: #FA4A0C;
  padding: 1.2rem 3.6rem;
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.1px;
  cursor: pointer;

  @media(max-width: 768px) {
    margin: 0.5rem 0;
  }

`;

export const ButtonApp = styled.a`
  margin: 0 1rem;
  padding: 1.2rem 3.6rem;
  border: 1px solid #fff;
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.1px;
  cursor: pointer;

  @media(max-width: 768px) {
    border-color: #FA4A0C;
    color: #FA4A0C;
    margin: 0.5rem 0;
  }
`;

export const ImageMobile = styled.img`
  margin-top: -10rem;
  margin-left: -10rem;
  @media(max-width: 768px) {
    width: 90vw;
    margin-top: -4rem;
    margin-left: -4rem;
  }
`;


export const Subtitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 2.75rem;
  font-weight: 600;
  color: #333333;
  letter-spacing: 0.1px;
  margin: 6rem 0;

  @media(max-width: 768px) {
    font-size: 1.5rem;
    margin-top: -10rem;
  }
`;

export const LineGray = styled.div`
  height: 2px;
  width: 60vw;
  background: #e4e4e4;

  @media(max-width: 768px) {
    width: 100vw;
    margin: 5rem;
  }
`;