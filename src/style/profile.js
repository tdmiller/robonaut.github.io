import styled from '@emotion/styled';
import Icon from '@mdi/react';

import colors from './colors';

export const ProfileContent = styled.div(() => ({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const ProfileLinks = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 8,
}));

export const ProfileIcon = styled(Icon)(() => ({
  margin: 8,
  width: '2em',
  fill: colors.white,
  '&:hover': {
    fill: colors.blue,
  },
}));

export const ProfileEmail = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

export const ProfileEmailLink = styled.a(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: colors.silver,
  textDecoration: 'none',
  fontSize: '0.8em',
  '&:hover': {
    color: colors.blue,
  },
}));

export const ProfileEmailIcon = styled(Icon)(() => ({
  fill: colors.silver,
  width: '1em',
  marginRight: 4,
}));

export const Avatar = styled.img(props => ({
  borderRadius: `${props.radius}mm`,
  width: `${props.radius * 2}mm`,
  height: `${props.radius * 2}mm`,
}));

export const Name = styled.h2(() => ({
  color: colors.white,
  marginTop: 36,
  marginBottom: 8,
  textAlign: 'center',
}));

export const JobTitle = styled.div(() => ({
  color: colors.silver,
  textAlign: 'center',
}));

export const ProfileLanguages = styled.div(() => ({
  width: '100%',
  margin: 24,
}));

export const ProfileLanguage = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  color: colors.silver,
}));

export const ProfileHighlights = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
}));
