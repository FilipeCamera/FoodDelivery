import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -8rem;

  @media(max-width: 768px) {
    flex-direction: column-reverse;
    margin-top: 0;
  }
`;
