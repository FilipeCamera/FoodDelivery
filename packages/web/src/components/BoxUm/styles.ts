import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h4`
  font-family: 'Montserrat', sans-serif;
`;

export const TitleApre = styled.h1``;

export const TitleDesc = styled.h2``;

export const MobileImage = styled.img`
  float: left;
`;