import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import api from '../../services/api';

import {
  Container,
  Header,
  Title,
  MenuButton,
  ContentSection,
  InfoContainer,
  InfoImage,
  InfoTxtContainer,
  InfoTitle,
  InfoSubTitle,
} from './styles';

const Home = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    api.get('/eventos').then(res => {
      setInfo(res.data);
    });
  }, []);

  const { navigate, openDrawer } = useNavigation();

  function navigateToMoreInfo() {
    navigate('More');
  }

  const InfoItem = ({item: info}) => (
    <ContentSection>
      <InfoContainer onPress={navigateToMoreInfo} >
        <InfoImage source={{uri: info.imagem}} />

        <InfoTxtContainer>
          <InfoTitle numberOfLines={1}>
            {info.nome}
          </InfoTitle>
          <InfoSubTitle numberOfLines={2}>
            Para quem quer aproveitar o feriado da independência com a familía,
            o Polo Caruaru é uma excelente opção.
          </InfoSubTitle>
        </InfoTxtContainer>
      </InfoContainer>
    </ContentSection>
  );

  return (
    <Container>
      <Header>
        <MenuButton onPress={() => openDrawer()} >
          <Icon name="menu" size={26} color={'#efeff1'} />
        </MenuButton>

        <Title>Polo Info</Title>
      </Header>

      <FlatList
        data={info}
        renderItem={InfoItem}
        keyExtractor={info => info.id}
      />


    </Container>
  );
}

export default Home;