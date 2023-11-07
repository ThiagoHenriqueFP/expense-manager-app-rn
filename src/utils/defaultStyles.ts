import styled from 'styled-components/native';
import { DEFAULT_LIGTH_GREY, DEFAULT_WHITE, DEFAULT_YELLOW } from './colors';
import { LoginContainer } from '../pages/Login/styled';

export const DefaultText = styled.Text`
  color: ${DEFAULT_WHITE};
  font-family: 'Poppins';
`;

export const DefaultBtn = styled.TouchableOpacity`
  border-radius: 25px;
  padding: 8px;
  margin: 12px;
  margin-top: 48px;

  align-items: center;

  background: ${DEFAULT_YELLOW};
  width: 70%;
`;

export const DefaultTextField = styled.TextInput.attrs({
  placeholderTextColor: DEFAULT_WHITE,
})`
  padding: 12px;
  margin: 8px;
  color: ${DEFAULT_YELLOW};
  background: ${DEFAULT_LIGTH_GREY};
  width: 70%;
  border-radius: 10px;
  font-size: 20px;
`;

export const DefaultCardContainer = styled.View`
  padding: 16px;
  background: ${DEFAULT_LIGTH_GREY};
  border-radius: 20px;
`;