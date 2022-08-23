import styled from "styled-components"

export const Input = styled.input`
  display: block;

  height: 30px;
  width: calc(70% + 2px);

  box-sizing: border-box;
  padding: 10px 20px;
  outline: none;

  color: ${props => props.theme.palette.primary.main};
  border: 1px solid ${props => props.theme.palette.secondary.main};
  margin: 0 0 10px 2px;

  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }


`