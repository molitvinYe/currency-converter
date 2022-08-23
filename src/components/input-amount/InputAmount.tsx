import React, { useEffect, useState } from 'react'
import { Input } from './InputAmount.styled'

const InputAmount: React.FC <{getValue(value: number): void , defaultValue: number}> = ({getValue, defaultValue}) => {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    const timeout = setTimeout(() => {
      getValue(value)
    }, 500)
    return () => {clearTimeout(timeout)}
  }, [value])

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement
    const inputValue = Number(input.value)
   
    setValue(inputValue)
  }

  return (
    <Input type = "number" placeholder='Amount...' onChange={changeHandler} value = {value} min="1"/>
  )
}

export default InputAmount