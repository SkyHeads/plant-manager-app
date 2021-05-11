import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Welcome from './src/pages/Welcome';

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Welcome />
    </>
  );
};

export default App;
