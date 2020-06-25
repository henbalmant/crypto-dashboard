import styled from 'styled-components';
import {subtleBoxShadow, lightBlueBackground, orangeBoxShadow, redBoxShadow} from './Styles'

export const Tile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
  padding: 10px;
  `

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${orangeBoxShadow}
  }
`

export const DeletableTile = styled(SelectableTile)`
  &:hover {
    cursor: pointer;
    ${redBoxShadow}
  }
`

export const DisabledTile = styled(Tile)`
  pointer-events: none;
  opacity: 0.4;
`
