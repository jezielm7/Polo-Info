import React from 'react';

import SignOutIcon from 'react-native-vector-icons/Octicons';

import DrawerItem from '../DrawerItem';

import AvatarImg from '../../assets/avatar.jpeg';

import {
  Container,
  Header,
  Avatar,
  UserInfo,
  Username,
  Nickname,
  ScreensSection,
  SignOutSection,
  SignOutButton,
  SignOutBtnText,
} from './styles';

const Drawer = () => {
  return (
    <Container>
      <Header>
        <Avatar source={AvatarImg} />

        <UserInfo>
          <Username>Jeziel Marques</Username>
          <Nickname>@jezielm7</Nickname>
        </UserInfo>
      </Header>

      <ScreensSection>
        <DrawerItem />
      </ScreensSection>

      <SignOutSection>
        <SignOutButton>
          <SignOutIcon name="sign-out" size={22} color={'#efeff1'} />
          <SignOutBtnText>Sign Out</SignOutBtnText>
        </SignOutButton>
      </SignOutSection>

    </Container>
  );
}

export default Drawer;