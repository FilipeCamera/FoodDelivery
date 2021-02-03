import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
    </>
  );
}

export default App;
