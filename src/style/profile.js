import styled from '@emotion/styled';
import Icon from '@mdi/react';
import colors from './colors';

export const ProfileContent = styled.div(props => ({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const ProfileLinks = styled.div(props => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 8,
}));

export const ProfileIcon = styled(Icon)(props => ({
  margin: 8,
  width: '2em',
  fill: colors.white,
  '&:hover': {
    fill: colors.blue,
  },
}));

export const ProfileEmail = styled.div(props => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

export const ProfileEmailLink = styled.a(props => ({
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

export const ProfileEmailIcon = styled(Icon)(props => ({
  fill: colors.silver,
  width: '1em',
  marginRight: 4,
}));

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

export const ProfileLanguages = styled.div(props => ({
  width: '100%',
  margin: 24,
}));

export const ProfileLanguage = styled.div(props => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  color: colors.silver,
}));

export const ProfileHighlights = styled.div(props => ({
  display: 'flex',
  flexDirection: 'row',
}));
