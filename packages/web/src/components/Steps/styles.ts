import styled from 'styled-components';

import Background from '../../assets/backgroundDois.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  width: 100vw;
  background-image: url(${Background});

  @media(max-width: 768px) {
    background-image: none;
    background: #252B42;
  }
`;

export const TitleDown = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  line-height: 3.6rem;
  letter-spacing: 0.2px;
  color: #fff;
`;

export const TitleDownDesc = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.2px;
  line-height: 2.4rem;
  margin: 1.6rem 0;
  color: #fff;

  @media(max-width: 768px) {
    display: none;
  }
`;

export const TitleDownDescMob = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.2px;
  line-height: 2.4rem;
  margin: 1.6rem 0;
  color: #fff;
  display: none;

  @media(max-width: 768px) {
    display: block;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonApp = styled.a`
  margin: 0 1rem;
  color: #fff;
  padding: 1.2rem;
  border: 1px solid #fff;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;

  text-decoration: none;

  @media(max-width: 768px) {
    display: none;
  }
`;

export const ButtonFree = styled.a`
  margin: 0 1rem;
  color: #fff;
  padding: 1.2rem;
  border: 1px solid #fff;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  display: none;

  text-decoration: none;

  @media(max-width: 768px) {
    display: block;
  }
`;

export const ButtonPlay = styled.a`
  margin: 0 1rem;
  background: #FA4A0C;
  color: #fff;
  padding: 1.2rem;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;

  text-decoration: none;

  @media(max-width: 768px) {
    display: none;
  }
`;

export const ButtonBuy = styled.a`
  margin: 0 1rem;
  display: none;
  background: #FA4A0C;
  color: #fff;
  padding: 1.2rem;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;

  text-decoration: none;

  @media(max-width: 768px) {
    display: block;
  }
`;