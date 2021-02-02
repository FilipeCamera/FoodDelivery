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
  width: 100px;
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
    transition: max-height 0.3s ease-in;
  }
`;

export const Link = styled.a`
  text-decoration: none;
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