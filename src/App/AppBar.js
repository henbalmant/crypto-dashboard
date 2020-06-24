import React from 'react';
import styled, {css} from 'styled-components';

const Bar = styled.div`
  font-family: 'Ubuntu', sans-serif;
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: auto 180px 100px 100px;
`

const Logo = styled.div`
  font-size: 1.5em;
`

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    text-shadow: 0px 0px 30px #f2a365;
  `}
`

const toProperCase = (lower) => {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

const ControlButton = ({name, active}) => {
  return(
    <ControlButtonElem active={active}>
      {toProperCase(name)}
    </ControlButtonElem>
  );
}


const AppBar = () => {
  return(
    <Bar>
      <Logo> CryptoDash </Logo>
      <ControlButton active name="dashboard"/>
      <ControlButton name="settings"/>
    </Bar>
  );
}

export default AppBar;
