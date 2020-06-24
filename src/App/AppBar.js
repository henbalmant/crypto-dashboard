import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px 100px 100px;
`

const Logo = styled.div`
  font-family: 'Ubuntu', sans-serif;
  font-size: 21px;
`

const AppBar = () => {
  return(
    <Bar>
      <Logo> CryptoDash </Logo>
      <div> Dashboard </div>
      <div> Settings </div>
    </Bar>
  );
}

export default AppBar;
