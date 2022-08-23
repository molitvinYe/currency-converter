import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;

  background-color: ${props => props.theme.bg.secondary};
`