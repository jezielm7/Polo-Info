import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #1A127B;
`;

export const Header = styled.View`
  flex: 1;
  border: 0.3px;
  padding-left: 15px;
  align-items: center;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 15px;
`;

export const UserInfo = styled.View``;

export const Username = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #efeff1;
`;

export const Nickname = styled.Text`
  color: #fff9;
  padding-top: 4px;
`;

export const ScreensSection = styled.View`
  flex: 4;
  background: #17202A;
`;

export const NavBtnSection = styled.View`
  padding: 25px 20px;
`;

export const NavButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-bottom: 25px;
`;

export const NavBtnText = styled.Text`
  color: #efeff1;
  font-size: 18px;
  padding-left: 30px;
`;

export const SignOutSection = styled.View`
  flex: 0.6;
  background: #14202A;
  justify-content: center;
`;

export const SignOutButton = styled.TouchableOpacity`
  padding-left: 35px;
  flex-direction: row;
  align-items: center;
`;

export const SignOutBtnText = styled.Text`
  color: #efeff1;
  font-size: 18px;
  padding-left: 30px;
`;

