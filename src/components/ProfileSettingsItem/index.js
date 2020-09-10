import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import AccountIcon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  NavBtnSection,
  NavButton,
  NavBtnText,
  InviteView,
} from './styles';

const ProfileSettingsItem = () => {
  return (
    <Container>
      <NavBtnSection>
        <NavButton>
          <AccountIcon name="user-cog" size={25} color={'#efeff1'} />
          <NavBtnText style={{ marginLeft: -5,}} >Account</NavBtnText>
        </NavButton>

        <NavButton>
          <MCIcon name="message-reply-text" size={25} color={'#efeff1'} />
          <NavBtnText>Chat</NavBtnText>
        </NavButton>

        <NavButton>
          <Icon name="notifications" size={25} color={'#efeff1'} />
          <NavBtnText>Notifications</NavBtnText>
        </NavButton>

        <NavButton>
          <MCIcon name="chart-donut" size={25} color={'#efeff1'} />
          <NavBtnText>Data & Storage</NavBtnText>
        </NavButton>

        <NavButton>
          <Icon name="md-help-circle" size={28} color={'#efeff1'} />
          <NavBtnText style={{ marginLeft: -1,}}>Help</NavBtnText>
        </NavButton>

        <InviteView>
          <NavButton>
            <Icon name="person-add-sharp" size={25} color={'#efeff1'} />
            <NavBtnText>Invite a Friend</NavBtnText>
          </NavButton>
        </InviteView>

      </NavBtnSection>
    </Container>
  );
}

export default ProfileSettingsItem;