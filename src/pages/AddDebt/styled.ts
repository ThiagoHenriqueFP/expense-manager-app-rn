import styled from 'styled-components/native';
import { LoginContainer } from '../Login/styled';
import { DEFAULT_DARK_GREY, DEFAULT_WHITE } from '../../utils/colors';
import { DefaultBtn, DefaultText, DefaultTextField } from '../../utils/defaultStyles';

export const Container = styled(LoginContainer)``;

export const Input = styled(DefaultTextField).attrs({
  placeholderTextColor: DEFAULT_WHITE,
})``;

export const Btn = styled(DefaultBtn)``;

export const GoBackBtn = styled(DefaultBtn)`
  width: max-content;
  position: absolute;
  right: 25px;
  top: 25px;
`;

export const BtnText = styled(DefaultText)`
  font-size: 20px;
  font-weight: 800;
  color: ${DEFAULT_DARK_GREY};
`;

export const HeaderText = styled(DefaultText)`
  font-size: 32px;
  font-weight: 800;
  color: ${DEFAULT_WHITE};
  margin-bottom: 48px;
`;