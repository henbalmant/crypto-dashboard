import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from './AppProvider';

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
    <AppContext.Consumer>
      {({page, setPage}) => (
        <ControlButtonElem
          onClick={() => setPage(name)}
          active={page === name}
        >
          {toProperCase(name)}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
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
