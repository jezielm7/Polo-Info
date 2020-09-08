import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import MoreInfo from '../pages/MoreInfo';
import Drawer from '../components/Drawer';

const { Navigator, Screen } = createDrawerNavigator();


const DrawerRouter = () => {
  return (
    <NavigationContainer>
      <Navigator
        drawerContent={Drawer}
        drawerType="slide"
      >
        <Screen name="Home" component={Home} options={{ }} />
        <Screen name="More" component={MoreInfo} options={{ }} />
        <Screen name="Profile" component={Profile} options={{ }} />
      </Navigator>
    </NavigationContainer>
  );
}

export default DrawerRouter;