import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 30px;
  width: 70%;
`

export const Select = styled.div`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  color: ${props => props.theme.palette.primary.main};
  background-color: ${props => props.theme.palette.secondary.contrastText};

  border: 1px solid ${props => props.theme.palette.secondary.main};
`

export const List = styled.ul`
  position: absolute;
  top: 100%;

  width: 100%;

  margin: 0;
  padding: 0;
  list-style: none;

  border: 1px solid ${props => props.theme.palette.secondary.main};
  border-top: none;
`

export const Option = styled.li`
  cursor: pointer;

  text-align: center;

  color:${props => props.theme.palette.secondary.contrastText};
  background-color:${props => props.theme.palette.primary.main};

  & + & {
    border-top: 1px solid ${props => props.theme.palette.secondary.contrastText};
  }

  &:hover {
    color: ${props => props.theme.palette.secondary.contrastText};
    background-color: ${props => props.theme.palette.secondary.main};
  }
`