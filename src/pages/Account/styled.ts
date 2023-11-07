import styled from 'styled-components/native';
import { DEFAULT_DARK_GREY, DEFAULT_LIGTH_GREY } from '../../utils/colors';
import { DefaultBtn, DefaultCardContainer, DefaultText } from '../../utils/defaultStyles';

export const Container = styled.View`
  background: ${DEFAULT_DARK_GREY};
  align-items: center;
  /* justify-content: center; */
  padding: 32px;
  flex: 1;
  height: 100%;
`;

export const HeaderText = styled(DefaultText)`
  font-size: 28px;
  font-weight: 700;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background: ${DEFAULT_DARK_GREY};
  padding: 32px;
`;

// export const ContentContainer = styled(DefaultCardContainer)``;

export const InfoContainer = styled.View`
  width: 100%;
  align-items: start;
`;

export const Separator = styled.View`
  width: 50%;
  align-items: start;
`;

export const PhotoContainer = styled.View`
  margin-bottom: 20%;
`;

export const BtnText = styled(DefaultText)`
  color: ${DEFAULT_DARK_GREY};
  font-weight: 700;
  font-size: 20px;
`;

export const LogoutBtn = styled(DefaultBtn)`
  position: relative;
  bottom: 0px;
  background: ${DEFAULT_LIGTH_GREY};
  width: 100%;
  margin: 0;
  border-radius: 0;
`;