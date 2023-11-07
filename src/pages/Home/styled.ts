import styled from 'styled-components/native';
import { DEFAULT_DARK_GREY } from '../../utils/colors';

export const Divider = styled.View<{empty?: boolean}>`
  display: flex;
  flex-direction: column;
  word-break: break-all;
  max-width: ${props => props.empty ? '100%' : '50%'};

`;

export const Container = styled.View`
  margin-top: 12px;
  margin-bottom: 12px;
`;


export const Separator = styled.View<{direction?: string}>`
  gap: 12px ;
  margin-bottom: ${props => props.direction != 'row' ? '12px' : '4px'};

  flex-direction: ${props => props.direction || 'column'};
  justify-content: space-between;
`;

export const Header = styled.View`
  width: 100%;
  padding: 12px;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 25px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
