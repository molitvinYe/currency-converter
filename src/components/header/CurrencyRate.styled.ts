import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  width: 120px;

  padding: 0 10px;

  color: ${props => props.theme.palette.primary.main};
  border: 1px solid ${props => props.theme.palette.primary.main};
  border-radius: ${props => props.theme.borderRadius};

  & + & {
    margin-left: 30px;
  }
`

export const Currency = styled.span`
  font-weight: bold;
  margin-right: 5px;
`

export const Price = styled.span`
  margin: 0 auto;
`