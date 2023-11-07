import styled from 'styled-components/native';
import { DefaultText } from '../../utils/defaultStyles';
import { DEFAULT_DARK_GREY } from '../../utils/colors';

export const HeaderText = styled(DefaultText)`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 48px;
`;

export const HeaderContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 28px;
`

export const Container = styled.View`
  flex: 1;
  padding: 28px;
  align-items: center;
  justify-content: center;
`;

export const TextBtn = styled(DefaultText)`
  font-size: 20px;
  font-weight: 700;
  color: ${DEFAULT_DARK_GREY};
`;