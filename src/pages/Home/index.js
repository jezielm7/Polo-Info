import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useIsDrawerOpen } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Header,
  Title,
  MenuButton,
  ButtonArea,
  Button,
  BtnText,
} from './styles';

const Home = ({ navigation }) => {
  const { navigate } = useNavigation();

  function navigateToMoreInfo() {
    navigate('More');
  }

  

  return (
    <Container>
      <Header>
        <MenuButton onPress={() => navigation.toggleDrawer()} >

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