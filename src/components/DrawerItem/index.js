import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import { Container, NavBtnSection, NavButton, NavBtnText, } from './styles';

const DrawerItem = () => {
  return (
    <Container>
      <NavBtnSection>
          <NavButton>
            <Icon name="home" size={22} color={'#efeff1'}/>
            <NavBtnText>Home</NavBtnText>
          </NavButton>

          <NavButton>
            <Icon name="add-circle" size={22} color={'#efeff1'} />
            <NavBtnText>More Info</NavBtnText>
          </NavButton>

          <NavButton>
            <Icon name="person-sharp" size={22} color={'#efeff1'} />
            <NavBtnText>Profile</NavBtnText>
          </NavButton>

          <NavButton>
            <Icon name="bookmark" size={22} color={'#efeff1'} />
            <NavBtnText>Bookmarks</NavBtnText>
          </NavButton>

          <NavButton>
            <Icon name="settings" size={22} color={'#efeff1'} />
            <NavBtnText>Settings</NavBtnText>
          </NavButton>
        </NavBtnSection>
    </Container>
  );
}

export default DrawerItem;