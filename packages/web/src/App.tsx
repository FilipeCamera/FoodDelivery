import React from 'react';
import BoxDois from './components/BoxDois';
import BoxTres from './components/BoxTres';
import BoxUm from './components/BoxUm';
import Header from './components/Header';
import Hero from './components/Hero';
import Steps from './components/Steps';
import { GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <BoxUm />
      <BoxDois />
      <BoxTres />
      <Steps />
    </>
  );
}

export default App;
