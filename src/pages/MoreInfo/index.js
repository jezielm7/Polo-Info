import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  ContentSection,
  NewsTitleContainer,
  NewsTitle,
  NewsSubTitle,
  InputContainer,
  EmailInput,
  ButtonContainer,
  RegisterButton,
  RegisterBtnText,
  AuthorSection,
  AuthorText,
  AuthorName,
} from './styles';

const MoreInfo = () => {
  const { navigate } = useNavigation();

  function handleNavigateBack() {
    navigate('Home');
  }

  return (
    <Container>
      <Title>Polo Info</Title>

      <ContentSection>

        <NewsTitleContainer>
          <NewsTitle>Central de Notícias</NewsTitle>

          <NewsSubTitle>
            Assine a Central de Notícias para receber as novidades em primeira mão.
          </NewsSubTitle>
        </NewsTitleContainer>

        <InputContainer>
          <EmailInput
            placeholder="Digite seu email"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </InputContainer>

        <ButtonContainer>
          <RegisterButton onPress={handleNavigateBack} >
            <RegisterBtnText>Assinar</RegisterBtnText>
          </RegisterButton>
        </ButtonContainer>
      </ContentSection>

      <AuthorSection>
        <AuthorText>From</AuthorText>
        <AuthorName>Dev Solutions</AuthorName>
      </AuthorSection>
    </Container>
  );
}

export default MoreInfo;