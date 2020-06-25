import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import CoinGrid from './CoinGrid';
import Page from '../Shared/Page';
import Search from './Search';

const Settings = () => {
  return(
    <Page name='settings'>
      <WelcomeMessage/>
      <CoinGrid topSection />
      <ConfirmButton/>
      <Search />
      <CoinGrid />
    </Page>
  );
}

export default Settings;
