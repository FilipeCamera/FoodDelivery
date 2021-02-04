import styled from 'styled-components';


interface NavbarProps {
  isOpen: Boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.2rem;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Logo = styled.img`
  width: 130px;

  @media(max-width: 768px){
    width: 100px;
  }
`;

export const Navbar = styled.div<NavbarProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
  @media(max-width: 768px){
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({isOpen}) => isOpen ? '300': '0'};
    transition: max-height 2s ease-in;
  }
`;

export const Link = styled.a`
  margin: 2rem;
  text-decoration: none;
  color: #252B42;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.2px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #FA4A0C;
  }

  @media(max-width: 768px){
    margin: 1.2rem;
  }
`;

export const Hamburguer = styled.div`
  display: none;
  flex-direction:column;
  cursor: pointer;

  @media(max-width: 768px) {
    display: flex;
  }
`;

export const ButtonDropLine = styled.span`
  height: 2px;
  width: 25px;
  background: #c4c4c4;
  border-radius: 2px;
  margin-bottom: 4px;
`;