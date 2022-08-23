import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 50px;

  background-color: ${props => props.theme.bg.primary};
`

export const Title = styled.h1`
  margin: 0;
  text-transform: uppercase;
  color: ${props => props.theme.palette.primary.main};
`

export const CurrencyRateList = styled.ul`
  display: flex;
  list-style: none;
`