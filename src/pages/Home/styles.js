import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #000014;
`;

export const Header = styled.View`
  padding: 30px 15px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #efeff2;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

export const MenuButton = styled.TouchableOpacity`
  padding-right: 95px;
`;

export const ContentSection = styled.View`
  padding: 0 6px 15px;
`;

export const InfoContainer = styled.TouchableOpacity`
  background: #efeff1;
  border-radius: 10px;
  flex-direction: row;
  height: 100px;
  padding: 0 35px;
  align-items: center;
  justify-content: center;
`;

export const InfoImage = styled.Image`
  width: 95px;
  height: 72px;
  margin-left: 45px;
  border-radius: 10px;
`;

export const InfoTxtContainer = styled.View`
  margin-left: 12px;
  margin-right: 42px;
`;

export const InfoTitle = styled.Text`
  color: #2E4052;
  font-size: 18px;
  font-weight: bold;
`;

export const InfoSubTitle = styled.Text`
  color: #34495E;
  font-size: 14px;
  padding-top: 12px;
`;