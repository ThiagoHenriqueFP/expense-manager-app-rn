import styled from 'styled-components/native';
import { DEFAULT_DARK_GREY } from '../../utils/colors';

export const StatsContainerView = styled.View`
  flex-direction: row;
  align-items: center;
  background: ${DEFAULT_DARK_GREY};
  margin: 25px;
  margin-top: 48px;
  padding: 25px;
  border-radius: 25px;
  /* flex: 1; */
  min-height: 200px;
  max-height: max-content;
`;