import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

// import HamburguerMenu from '../../components/Hamburguer';

import {
  Container,
  Header,
  Title,
  MenuButton,
  ButtonArea,
  Button,
  BtnText,
} from './styles';

function Home({ navigation }) {
  const { navigate, openDrawer } = useNavigation();

  function navigateToMoreInfo() {
    navigate('More');
  }

  return (
    <Container>
      <Header>
        <MenuButton onPress={() => navigation.openDrawer()} >
          <Icon name="menu" size={26} color={'#efeff2'} />
        </MenuButton>

        <Title>Polo Info</Title>
      </Header>

      <ButtonArea>
        <Button onPress={navigateToMoreInfo}>
          <BtnText>Navigate</BtnText>
        </Button>
      </ButtonArea>

    </Container>
  );
}

export default Home;