import React, {useEffect, useState} from 'react'
import { CURRENCY_LIST } from '../../store/constants'
import { Container, Select, List, Option } from './CurrencySelect.styled'

const CurrencySelect: React.FC <{currency: string, getCurrency(currency: string): void}> = ({currency, getCurrency}) => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>(currency)
  const [currencyList, setCurrencyList] = useState<string[]>(CURRENCY_LIST)
  
  useEffect(() => {
    const filteredList = CURRENCY_LIST.filter((currency) => currency !== selectedCurrency)
    setCurrencyList(filteredList)
  }, [selectedCurrency])

  const [isShow, setIsShow] = useState(false)

  const selectHandler = (event: React.MouseEvent<HTMLElement>) => {
    const item = event.target as HTMLElement
    const itemValue = item.textContent
    if (itemValue) {
      getCurrency(itemValue)
      setSelectedCurrency(itemValue)
    }
    setIsShow((prev) => !prev)
  }

  return (
    <Container>
      <Select onClick={() => setIsShow((prev) => !prev)}>{selectedCurrency}</Select>
      {isShow && 
        <List>
          {currencyList.map((currency) => {
            return <Option key = {currency} onClick = {selectHandler}>{currency}</Option>
          })}
        </List>
      }
    </Container>    
  )
}

export default CurrencySelect