import React, {useState} from 'react';

import logoFood from '../../assets/LogoFood.png';

import {ButtonDropLine, Container, Hamburguer, Link, Logo, Navbar} from './styles';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Logo src={logoFood}/>
      <Hamburguer onClick={() => setIsOpen(!isOpen)}>
          <ButtonDropLine />
          <ButtonDropLine />
          <ButtonDropLine />
        </Hamburguer>
      <Navbar isOpen={isOpen}>
        <Link>Home</Link>
        <Link>Product</Link>
        <Link>Faq</Link>
        <Link>Contact</Link>
      </Navbar>
    </Container>
  )
}

export default Header;