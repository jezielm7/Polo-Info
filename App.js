import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

const polonews = () => {
  return (
    <>
      <StatusBar backgroundColor="#000012" />
      <Routes />
    </>
  );
}

export default polonews;