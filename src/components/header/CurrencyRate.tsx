import React from 'react'
import { convertAPI } from '../../services/ConvertService';
import { Item, Currency, Price } from './CurrencyRate.styled';

const CurrencyRate: React.FC <{from: string}> = ({from}) => {
  const {data: covertData} = convertAPI.useConvertCurrencyQuery({from: from, to: "UAH", amount: 1})

  return (
    <Item>
      <Currency>{from}:</Currency>
      <Price>{covertData ? `${covertData.result.toFixed(3)}UAH` : "..."}</Price>
    </Item>
  )
}

export default CurrencyRate