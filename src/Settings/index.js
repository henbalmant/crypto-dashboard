import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import CoinGrid from './CoinGrid';
import Page from '../Shared/Page';

const Settings = () => {
  return(
    <Page name='settings'>
      <WelcomeMessage/>
      <ConfirmButton/>
      <CoinGrid />
    </Page>
  );
}

export default Settings;
