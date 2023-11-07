import styled from 'styled-components/native';
import { DEFAULT_DARK_GREY, DEFAULT_LIGTH_GREY, DEFAULT_WHITE, DEFAULT_YELLOW } from '../../utils/colors';
import { DefaultText } from '../../utils/defaultStyles';

export const Container = styled.View`
  background-color: ${DEFAULT_DARK_GREY};
  padding: 16px;
  border-radius: 25px;
  margin: 20px 10px 24px 10px;

  max-height: 250px;
  gap: 24px;
`;

export const BoldText = styled(DefaultText)`
  font-weight: 700;
`;

export const BigYellowText = styled(DefaultText)`
  color: ${DEFAULT_YELLOW};
  font-weight: 300;
  font-size: 32px;
  margin: auto;
`;

export const DebtButton = styled.TouchableOpacity`
  background: ${DEFAULT_LIGTH_GREY};
  color: ${DEFAULT_YELLOW};
  border-radius: 25px;
  padding: 8px;
  margin: 12px;

  align-items: center;
`;