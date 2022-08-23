import React, { useEffect, useState } from 'react'
import { Arrow, Container, Side } from './Converter.styled'
import CurrencySelect from '../currency-select/CurrencySelect'
import InputAmount from '../input-amount/InputAmount'
import { convertAPI } from '../../services/ConvertService'
import Spinner from '../ui/Spinner'

const Converter = () => {
  const [firstCurrency, setFirstCurrency] = useState("USD")
  const [secondCurrency, setSecondCurrency] = useState("UAH")

  const [amount, setAmount] = useState(1)
  const [result, setResult] = useState(1)

  const [isFromFirstToSecond, setIsFromFirstToSecond] = useState(true)

  const from = isFromFirstToSecond ? firstCurrency : secondCurrency
  const to = isFromFirstToSecond ? secondCurrency : firstCurrency

  const {data, isFetching} = convertAPI.useConvertCurrencyQuery({from, to, amount});

  useEffect(() => {
    if (data) setResult(data.result)
  }, [data])

  const firstCurrencyChange = (currency: string) => setFirstCurrency(currency)
  const secondCurrencyChange = (currency: string) => setSecondCurrency(currency)

  const convertResultFromFirstToSecond = (value: number) => {
    if (value === result) return
    setAmount(value)
    setIsFromFirstToSecond(true)
  }

  const convertResultFromSecondToFirst = (value: number) => {
    if (value === result) return
    setAmount(value)
    setIsFromFirstToSecond(false)
  }

  return (
    <Container>
      {isFetching ? <Spinner/> : 
        <>
          <Side>
            <InputAmount getValue={convertResultFromFirstToSecond} defaultValue = {isFromFirstToSecond ? amount : result}/>
            <CurrencySelect currency = {firstCurrency} getCurrency = {firstCurrencyChange}/>
          </Side>

          <Arrow/>

          <Side>
            <InputAmount getValue={convertResultFromSecondToFirst} defaultValue = {isFromFirstToSecond ? result : amount}/>
            <CurrencySelect currency = {secondCurrency} getCurrency = {secondCurrencyChange}/>
          </Side> 
        </>
      }
    </Container>
  )
}

export default Converter