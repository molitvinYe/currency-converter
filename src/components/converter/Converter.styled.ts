import styled from "styled-components";
import {ReactComponent as ArrowIcon} from '../../assets/arrow.svg'

export const Container = styled.div`
  display: flex;
  position: relative;

  height: 80%;
  width: 50%;

  border: 1px solid ${props => props.theme.palette.primary.main};
  border-radius: ${props => props.theme.borderRadius};

  color: ${props => props.theme.palette.primary.main};
  background-color: ${props => props.theme.bg.primary};
`

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 50%;
`

export const Arrow = styled(ArrowIcon)`
  height: 80px;
  width: 80px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  fill: ${props => props.theme.palette.primary.main};
`