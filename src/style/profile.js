import styled from '@emotion/styled';
import Icon from '@mdi/react';
import { colors } from './';

export const ProfileContent = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const ProfileIcon = styled(Icon)`
  margin: 8px;
  width: 2em;
  fill: ${colors.white};
  &:hover {
    fill: ${colors.blue};
  }
`;

export const ProfileEmail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileEmailLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.silver};
  text-decoration: none;
  font-size: 0.8em;
  &:hover {
    color: ${colors.blue};
  }
`;

export const ProfileEmailIcon = styled(Icon)`
  fill: ${colors.silver};
  width: 1em;
  margin-right: 4px;
`;

export const Avatar = styled.img(props => ({
  borderRadius: `${props.radius}mm`,
  width: `${props.radius * 2}mm`,
  height: `${props.radius * 2}mm`,
}));

export const Name = styled.h2(props => ({
  color: colors.white,
  marginTop: 36,
  marginBottom: 8,
  textAlign: 'center',
}));

export const JobTitle = styled.div(props => ({
  color: colors.silver,
  textAlign: 'center',
}));

export const ProfileLanguages = styled.div`
  width: 100%;
  margin: 24px;
`;

export const ProfileLanguage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${colors.silver};
`;

export const ProfileHighlights = styled.div`
  display: flex;
  flex-direction: row;
`;
