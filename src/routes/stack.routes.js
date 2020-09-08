import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Routes from './routes';
import DrawerRouter from './drawer.routes';

const { Navigator, Screen } = createStackNavigator();

const StackRouter = () => {
  <NavigationContainer>
    <Navigator>
      <Screen name="Routes" component={Routes} options={{}} />
      <Screen name="Drawer" component={DrawerRouter} options={{}} />
    </Navigator>
  </NavigationContainer>
};

export default StackRouter;