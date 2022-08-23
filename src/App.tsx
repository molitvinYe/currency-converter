import React from 'react';
import Converter from './components/converter/Converter';
import Header from './components/header/Header';
import { FullScreenWrapper } from './components/ui/FullScreenWrapper';
import { Main } from './components/ui/Main.styled';

function App() {
  return (
    <FullScreenWrapper>
      <Header/>
      <Main>
        <Converter/>
      </Main>
    </FullScreenWrapper>
  );
}

export default App;
