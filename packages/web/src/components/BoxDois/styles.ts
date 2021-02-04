import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: -8rem;

  @media(max-width: 768px) {
    flex-direction: column;
    margin-top: 0;
  }
`;