import styled from '@emotion/styled';
import Icon from '@mdi/react';

import colors from './colors';
import { HEADER_HEIGHT, HEADER_PADDING } from './sizes';

const profileHeaderColumn = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
};

export const ProfileContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  height: HEADER_HEIGHT,
  width: '100vw',
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
  display: 'flex',
  flexDirection: 'row',
}));

export const ProfileMe = styled.div(() => ({
  ...profileHeaderColumn,
  marginLeft: '1rem',
  marginRight: '2rem',
}));

export const Name = styled.div(() => ({
  color: colors.white,
  fontWeight: 'bold',
  fontSize: '1.8rem',
  lineHeight: '2rem',
  whiteSpace: 'nowrap',
}));

export const JobTitle = styled.div(() => ({
  color: colors.white,
  marginTop: '0.6rem',
  fontSize: '1.2rem',
}));

export const ProfileContactContainer = styled.div(() => ({
  ...profileHeaderColumn,
  fontSize: '0.6rem',
}));

export const ProfileContactLink = styled.a(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: colors.silver,
  textDecoration: 'none',
  '&:hover': {
    color: colors.blue,
  },
}));

export const ProfileContactIcon = styled(Icon)(() => ({
  fill: colors.silver,
  width: '1rem',
  marginRight: 4,
}));

export const ProfileContactAddress = styled.div(() => ({}));

export const ProfileIcon = styled(Icon)(() => ({
  width: '1.6rem',
  fill: colors.white,
  '&:hover': {
    fill: colors.blue,
  },
}));

export const Avatar = styled.img(() => ({
  borderRadius: '2.5rem',
  width: '5rem',
  height: '5rem',
  flexGrow: 'none',
}));

// export const ProfileLanguages = styled.div(() => ({
//   ...profileHeaderColumn,
//   fontSize: '0.6rem',
//   marginBottom: 0,
// }));

// export const ProfileLanguage = styled.div(() => ({
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   color: colors.silver,
// }));

// export const ProfileStars = styled.div(() => ({
//   ...profileHeaderColumn,
//   marginLeft: '1rem',
//   minWidth: '5rem',
//   fontSize: '0.6rem',
// }));

export const ProfileHighlights = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
}));

export const ProfileAbout = styled.div(() => ({
  color: colors.white,
}));
