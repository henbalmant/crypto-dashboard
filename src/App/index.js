import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import WelcomeMessage from '../Components/WelcomeMessage';

function App() {
  return (
    <AppLayout>
      <AppBar/>
      <WelcomeMessage/>
    </AppLayout>
  );
}

export default App;
