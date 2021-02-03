import React from 'react';
import BoxUm from './components/BoxUm';
import Header from './components/Header';
import Hero from './components/Hero';
import { GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <BoxUm />
    </>
  );
}

export default App;
