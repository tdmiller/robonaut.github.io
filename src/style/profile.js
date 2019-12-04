import styled from '@emotion/styled';
import Icon from '@mdi/react';

import colors from './colors';

export const HEADER_HEIGHT = '8rem';
export const HEADER_PADDING = '1rem';

const HEADER_SPACING = '2rem';

const profileHeaderColumn = {
  marginLeft: HEADER_SPACING,
  height: '4rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

export const ProfileContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: `calc(${HEADER_HEIGHT} - 2 * ${HEADER_PADDING})`,
  position: 'fixed',
  '@media print': {
    position: 'relative',
  },
  backgroundColor: colors.navy,
  alignItems: 'center',
  padding: HEADER_PADDING,
  zIndex: 1,
}));

export const ProfileContent = styled.div(() => ({
  ...profileHeaderColumn,
}));

export const Name = styled.div(() => ({
  color: colors.white,
  fontWeight: 'bold',
  fontSize: '1.5rem',
  whiteSpace: 'nowrap',
}));

export const JobTitle = styled.div(() => ({
  color: colors.white,
  fontSize: '1rem',
}));

export const ProfileContactContainer = styled.div(() => ({
  ...profileHeaderColumn,
}));

export const ProfileContactLink = styled.a(props => ({
  margin: '2px 0',
  marginLeft: props.addMargin ? '2em' : 0,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: colors.silver,
  textDecoration: 'none',
  fontSize: '0.8rem',
  '&:hover': {
    color: colors.blue,
  },
}));

export const ProfileContactIcon = styled(Icon)(() => ({
  fill: colors.silver,
  width: '1rem',
  marginRight: 4,
}));

export const ProfileContactAddress = styled.div(() => ({
  margin: '2px 0',
}));

export const ProfileLinks = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
}));

export const ProfileIcon = styled(Icon)(() => ({
  width: '1.6rem',
  marginTop: '0.5rem',
  fill: colors.white,
  '&:hover': {
    fill: colors.blue,
  },
}));

export const Avatar = styled.img(() => ({
  borderRadius: '2.5em',
  width: '5em',
  height: '5em',
  flexGrow: 'none',
}));

export const ProfileLanguages = styled.div(() => ({
  ...profileHeaderColumn,
}));

export const ProfileLanguage = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  color: colors.silver,
  fontSize: '0.8rem',
}));

export const ProfileStars = styled.div(() => ({
  ...profileHeaderColumn,
  marginLeft: '1rem',
  minWidth: '5rem',
}));

export const ProfileHighlights = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
}));

export const ProfileAbout = styled.div(() => ({
  color: colors.white,
}));
