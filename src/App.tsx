import React from 'react';
import { convertAPI } from './services/ConvertService';

function App() {
  const {data, isLoading, error} = convertAPI.useConvertCurrencyQuery({from: "EUR", to: "UAH", amount: 1})

  return (
    <div></div>
  );
}

export default App;
