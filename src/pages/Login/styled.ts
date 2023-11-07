import styled from 'styled-components/native';
import { DEFAULT_DARK_GREY, DEFAULT_LIGTH_GREY, DEFAULT_WHITE, DEFAULT_YELLOW } from '../../utils/colors';
import { DefaultBtn, DefaultText, DefaultTextField } from '../../utils/defaultStyles';

export const LoginContainer = styled.View`
  flex: 1;
  background: ${DEFAULT_DARK_GREY};
  align-items: center;
  justify-content: center;
`;

export const HeaderText = styled(DefaultText)`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 48px;
`;

export const TextField = styled(DefaultTextField).attrs({
  placeholderTextColor: DEFAULT_WHITE,
})``;

export const LoginBtn = styled(DefaultBtn)``;

export const TextBtn = styled(DefaultText)`
  font-size: 24px;
  font-weight: 700;
  color: ${DEFAULT_LIGTH_GREY};
`;

export const CreateAccount = styled.TouchableOpacity`
  margin: 24px;
`;