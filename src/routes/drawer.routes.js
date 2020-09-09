import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import MoreInfo from '../pages/MoreInfo';
import Drawer from '../components/Drawer';
import Routes from './routes';

const { Navigator, Screen } = createDrawerNavigator();


const DrawerRouter = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        drawerContent={Drawer}
        drawerType="front"
      >
        <Screen name="Home" component={Routes} options={{ }} />
        <Screen name="MoreInfo" component={MoreInfo} options={{ }} />
        <Screen name="Profile" component={Profile} options={{ }} />
      </Navigator>
    </NavigationContainer>
  );
}

export default DrawerRouter;