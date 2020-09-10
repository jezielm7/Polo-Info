import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #000014;
  align-items: center;
`;

export const Title = styled.Text`
  color: #efeff2;
  font-size: 30px;
  padding-top: 30px;
  font-weight: bold;
  text-align: center;
`;

export const ContentSection = styled.View`
  padding-top: 45%;
`;

export const NewsTitleContainer = styled.View`
  padding: 0 15px;
  align-items: center;
`;

export const NewsTitle = styled.Text`
  color: #efeff1;
  font-size: 26px;
  font-weight: bold;
`;

export const NewsSubTitle = styled.Text`
  color: #efeff1;
  font-size: 20px;
  padding: 20px 0;
  text-align: center;
`;

export const InputContainer = styled.View`
  padding: 0 30px 40px;
`;

export const EmailInput = styled.TextInput`
  font-size: 15px;
  padding-left: 20px;
  border-radius: 10px;
  background: #efeff1;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const RegisterButton = styled.TouchableOpacity`
  height: 55px;
  width: 220px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff5;
`;

export const RegisterBtnText = styled.Text`
  color: #efeff1;
  font-size: 18px;
`;

export const AuthorSection = styled.View`
  padding-top: 120px;
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
