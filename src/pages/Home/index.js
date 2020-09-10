import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import api from '../../services/api';

import InfoImg from '../../assets/7_setembro.png';

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
  const { navigate, openDrawer } = useNavigation();

  function navigateToMoreInfo() {
    navigate('More');
  }

  const InfoItem = () => (
    <ContentSection>
        <InfoContainer>
          <InfoImage source={InfoImg} />

          <InfoTxtContainer>
            <InfoTitle numberOfLines={1} >
              Polo oferece segurança para aproveitar feriado de sete de setembro
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

      <InfoItem />
      <InfoItem />
      <InfoItem />
      <InfoItem />

    </Container>
  );
}

export default Home;