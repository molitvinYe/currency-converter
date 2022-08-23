import React, {useMemo} from 'react'
import { Container, CurrencyRateList, Title } from './Hedaer.styled'
import { CURRENCY_LIST } from '../../store/constants'
import CurrencyRate from './CurrencyRate'

const Header = () => {
  const listOfCurrencyFrom = useMemo(() => CURRENCY_LIST.filter((currency) => currency !== "UAH"), [])

  return (
    <Container>
      <Title>Currency converter</Title>
      <CurrencyRateList>
        {listOfCurrencyFrom.map((currencyFrom) => {
          return <CurrencyRate from = {currencyFrom} key = {currencyFrom}/>
        })}
      </CurrencyRateList>
    </Container>
  )
}

export default Header