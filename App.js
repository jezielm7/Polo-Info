import React from 'react';
import { StatusBar } from 'react-native';

// import Routes from './src/routes/routes';
import DrawerRouter from './src/routes/drawer.routes';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#000012" />
      <DrawerRouter />
    </>
  );
}

export default App;