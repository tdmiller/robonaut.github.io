import styled from '@emotion/styled';
import Icon from '@mdi/react';

import colors from './colors';

export { colors };

export const MainContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  minHeight: '100vh',
  '@media print': {
    minHeight: '200vh',
  },
}));

export const ProfileContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: 192,
  padding: 16,
  '@media print': {
    minWidth: 160,
    backgroundColor: colors.navy,
  },
}));

export const SectionsContainer = styled.div(() => ({
  padding: 16,
  backgroundColor: colors.white,
}));

export const MainSection = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  color: colors.black,
  marginRight: 48,
  marginBottom: '1em',
  pageBreakInside: 'avoid',
}));

export const MainSectionTitle = styled.h2(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderBottom: `1px solid ${colors.silver}`,
  color: colors.navy,
  marginLeft: 48,
}));

export const MainSectionTitleIcon = styled(Icon)(() => ({
  marginRight: 16,
  marginLeft: -48,
  width: '1.2em',
  fill: colors.navy,
  opacity: 0.8,
}));

export const MainSectionContent = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  color: colors.black,
  marginLeft: 48,
}));

export const HighlightContainer = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const HighlightIcon = styled(Icon)(() => ({
  fill: colors.white,
  width: '2em',
}));

export const Star = styled(Icon)(props => ({
  fill: props.fill,
  width: '1em',
}));

export const Link = styled.a(props => ({
  textDecoration: 'none',
  color: props.color,
  '&:hover': {
    color: props.hoverColor || props.color,
  },
  '&:active': {
    color: props.activeColor || props.color,
  },
}));

export const MainSectionHeaderContainer = styled.div(props => ({
  display: 'flex',
  flexDirection: 'row',
  marginBottom: props.removeMarginBottom ? 0 : '1em',
}));

export const MainSectionHeaderTitleLeftContainer = styled.div(() => ({}));

export const MainSectionHeaderTitleLeft = styled.div(() => ({
  fontWeight: 'bold',
  color: colors.navy,
}));

export const MainSectionHeaderSubtitleLeft = styled.div(props => {
  return {
    color: colors.grey,
    fontSize: '0.8em',
    marginTop: 4,
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '&:hover': props.href ? { color: colors.blue } : {},
  };
});

export const MainSectionHeaderTitleRightContainer = styled.div(() => ({
  marginLeft: '2em',
}));

export const MainSectionHeaderTitleRight = styled.div(() => ({
  color: colors.blue,
  fontWeight: 'bold',
  display: 'block',
  textDecoration: 'none',
}));

export const MainSectionHeaderTitleRightLink = styled.a(() => ({
  color: colors.blue,
  fontWeight: 'bold',
}));

export const MainSectionHeaderSubtitleRight = MainSectionHeaderSubtitleLeft;

export const MainSectionHeaderLinkIcon = styled(Icon)(() => ({
  fill: colors.grey,
  width: '1em',
  marginLeft: '1em',
}));

export const KeywordsContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginBottom: -8,
}));

export const KeywordContainer = styled.div(({ isLast = false }) => ({
  backgroundColor: colors.whiteDarker,
  marginBottom: 8,
  // border: `1px solid ${colors.blue}`,
  color: colors.blue,
  padding: `0px 4px 0px 4px`,
  fontWeight: 'bold',
  borderRadius: 4,
  display: 'flex',
  flexDirection: 'row',
  marginRight: isLast ? 0 : 8,
}));

export const Keyword = styled.div``;
