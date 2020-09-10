import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ProfileSettingsItem from '../../components/ProfileSettingsItem';
import AvatarImg from '../../assets/avatar.jpeg';

import {
  Container,
  Header,
  Avatar,
  UserInfo,
  Username,
  UserStatus,
  SettingsSection,
  AuthorSection,
  AuthorText,
  AuthorName,
} from './styles';

const Profile = () => {
  return (
    <Container>
      <Header>
        <Avatar source={AvatarImg} />

        <UserInfo>
          <Username>Jeziel M.</Username>
          <UserStatus>Abstracting  ⚛</UserStatus>
        </UserInfo>

          <Icon name="qrcode-scan" size={28} color={'#607D8B'} />
      </Header>

      <SettingsSection>
        <ProfileSettingsItem />
      </SettingsSection>

      <AuthorSection>
        <AuthorText>From</AuthorText>
        <AuthorName>Dev Solutions</AuthorName>
      </AuthorSection>
    </Container >
  );
}

export default Profile;