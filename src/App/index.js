import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import WelcomeMessage from '../Components/WelcomeMessage';

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar/>
        <WelcomeMessage/>
      </AppProvider>
    </AppLayout>
  );
}

export default App;
