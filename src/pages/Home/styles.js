import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #000014;
`;

export const Header = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #efeff2;
  font-size: 28px;
  text-align: center;
`;

export const MenuButton = styled.TouchableOpacity`
  padding-right: 100px;
`;

export const ButtonArea = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  padding: 20px;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
  border-radius: 10px;
`;

export const BtnText = styled.Text`
  color: #efeff2;
  font-size: 18px;
  text-align: center;
`;