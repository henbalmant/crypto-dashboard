import React from 'react';
import { AppContext } from '../App/AppProvider';
import { SelectableTile, DisabledTile, DeletableTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';

const CoinTile = ({coinKey, topSection}) => {
  return <AppContext.Consumer>
    {({coinList}) => {
      let coin = coinList[coinKey];

      let TileClass = SelectableTile;
      if(topSection){
        TileClass = DeletableTile;
      }

      return <TileClass>
        <CoinHeaderGrid topSection={topSection} name={coin.name} symbol={coinKey} />
      </TileClass>
    }}
  </AppContext.Consumer>
}

export default CoinTile;
