import styled from 'styled-components/native';
import { DefaultText } from '../../utils/defaultStyles';
import { DEFAULT_DARK_GREY } from '../../utils/colors';

export const Header = styled(DefaultText)`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const BoldText = styled(DefaultText)`
  font-weight: 700;
`;

export const Separator = styled.View`
  padding: 12px;
  border-bottom-color: #708090;
  border-bottom-width: 1px;
`;

export const Scroller = styled.View`
  padding: 16px;
  flex-direction: row;
  align-self: flex-end;
`;
export const TextContainer = styled.View`
  align-items: flex-end;
`;

export const Container = styled.View`
  flex: 1;
  background: ${DEFAULT_DARK_GREY};
  align-items: center;
  justify-content: center;
`;