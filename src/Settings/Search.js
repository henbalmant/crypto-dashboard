import React from 'react';
import styled from 'styled-components';
import {lightBlueBackground, fontSize2} from '../Shared/Styles';
import { AppContext } from '../App/AppProvider';
import _ from 'lodash';
import fuzzy from 'fuzzy';

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`

const SearchInput = styled.input`
  ${lightBlueBackground}
  ${fontSize2}
  color: #ececec;
  height: 25px;
  border: 1px solid;
  border-radius: 5px;
  place-self: center left;
`

const handleFilter = _.debounce((inputValue, coinList, setFilterCoins) => {
  let coinSymbols = Object.keys(coinList);
  let coinNames   = coinSymbols.map(sym => coinList[sym].name)

  let allStringsToSearch = coinSymbols.concat(coinNames);
  let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map(result => result.string);

  let filteredCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.name;
    return (_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName))
  })

  setFilterCoins(filteredCoins);

}, 500)

function filterCoins(e, setFilterCoins, coinList) {
  let inputValue = e.target.value;
  if(!inputValue){
    setFilterCoins(null);
    return;
  }
  handleFilter(inputValue, coinList, setFilterCoins);
}

const Search = () => {
  return (<AppContext.Consumer>
    {({setFilterCoins, coinList}) =>
      <SearchGrid>
        <h2>Search all coins</h2>
        <SearchInput onKeyUp={(e) => filterCoins(e, setFilterCoins, coinList)} />
      </SearchGrid>
    }
  </AppContext.Consumer>
  );
}

export default Search;
