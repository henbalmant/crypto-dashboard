import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import WelcomeMessage from '../Components/WelcomeMessage';

function App() {
  return (
    <AppLayout>
      <WelcomeMessage/>
    </AppLayout>
  );
}

export default App;
