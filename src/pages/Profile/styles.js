import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #000014;
`;

export const Header = styled.View`
  flex: 1;
  border: 0.3px;
  padding-left: 15px;
  align-items: center;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-right: 15px;
`;

export const UserInfo = styled.View`
  padding-right: 130px;
`;

export const Username = styled.Text`
  color: #efeff1;
  font-size: 20px;
`;

export const UserStatus = styled.Text`
  color: #efeff1;
  font-size: 15px;
  padding-top: 4px;
`;

export const SettingsSection = styled.View`
  flex: 3;
`;

export const AuthorSection = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AuthorText = styled.Text`
  color: #efeff1;
  font-size: 16px;
`;

export const AuthorName = styled.Text`
  color: #efeff1;
  font-size: 20px;
  margin-top: 8px;
  font-weight: bold;
`;

