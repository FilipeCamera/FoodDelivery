import {createGlobalStyle} from 'styled-components';

import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    height: 100vh;
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5rem;

  @media(max-width: 768px) {
    align-items: center;
    margin-left: 0;
  }
`;

export const Title = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.1px;
  color: #FA4A0C;
  margin: 0.5rem 0;

  @media(max-width: 768px) {
    text-align: center;
  }
`;

export const TitleApre = styled.h1`
  font-family: 'Montserrat', sans-serif;
  width: 50vw;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 4rem;
  color: #252B42;
  margin: 0.5rem 0;

  @media(max-width: 768px) {
    text-align: center;
    width: 90vw;
  }
`;

export const TitleDesc = styled.h2`
  width: 35vw;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.2px;
  line-height: 2.4rem;
  color: #737373;
  margin: 0.5rem 0;

  @media(max-width: 768px) {
    text-align: center;
    width: 60vw;
  }
`;

export const MobileImage = styled.img``;