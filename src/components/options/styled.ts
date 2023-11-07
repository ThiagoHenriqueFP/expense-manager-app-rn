import styled from 'styled-components/native';
import { DEFAULT_DARK_GREY } from '../../utils/colors';
import { DefaultText } from '../../utils/defaultStyles';

export const OptionsContainer = styled.View`
  flex-direction: row;
  padding: 0 36px;
  margin-bottom: 20px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const OptionsBtn = styled.TouchableOpacity`
  padding: 16px;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  background: ${DEFAULT_DARK_GREY};
  max-width: 150px;
`;

export const OptionsText = styled(DefaultText)`
  font-weight: 700;
  padding: 0 16px;
`;