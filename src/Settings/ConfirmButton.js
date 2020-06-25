import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../App/AppProvider';
import {fontSize1, orangeTextShadow, color3} from '../Shared/Styles';

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: ${color3}
  ${fontSize1}
  padding: 5px;
  cursor: pointer;
  &:hover {
    ${orangeTextShadow}
  }
`
const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`

const ConfirmButton = () => {
  return(<AppContext.Consumer>
    {({confirmFavorites}) =>
      <CenterDiv>
        <ConfirmButtonStyled onClick={confirmFavorites}>
          Confirm Favorites
        </ConfirmButtonStyled>
      </CenterDiv>
    }
  </AppContext.Consumer>);
}

export default ConfirmButton;
