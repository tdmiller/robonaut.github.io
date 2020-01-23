import styled from '@emotion/styled';
import Icon from '@mdi/react';

import colors from './colors';
import { HEADER_HEIGHT } from './sizes';

export { colors };

export const MainContainer = styled.div(() => ({
  // display: 'flex',
  // flexDirection: 'column',
}));

export const SectionsContainer = styled.div(() => ({
  backgroundColor: colors.white,
  zIndex: 0,
  padding: `calc(${HEADER_HEIGHT} + 2rem) 2rem`,
  '@media print': {
    paddingTop: '1rem',
  },
}));

export const MainSection = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  color: colors.black,
  marginBottom: '1rem',
}));

export const MainSectionTitle = styled.div(() => ({
  display: 'flex',
  margin: '1rem 0',
  flexDirection: 'row',
  alignItems: 'center',
  fontWeight: 'bold',
  color: colors.navy,
}));

export const MainSectionTitleIcon = styled(Icon)(() => ({
  marginRight: '0.5rem',
  width: '1.5rem',
  fill: colors.navy,
  opacity: 0.8,
}));

export const MainSectionContent = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  color: colors.black,
}));

export const HighlightContainer = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const HighlightIcon = styled(Icon)(() => ({
  fill: colors.white,
  width: '2rem',
}));

export const Star = styled(Icon)(props => ({
  fill: props.fill,
  width: '1rem',
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
  backgroundColor: colors.whiteDarker,
  padding: 8,
  borderRadius: 4,
  flexDirection: 'row',
  marginBottom: props.removeMarginBottom ? 0 : '1rem',
}));

export const MainSectionHeaderTitleLeftContainer = styled.div(() => ({}));

export const MainSectionHeaderTitleLeft = styled.div(() => ({
  fontWeight: 'bold',
  color: colors.navy,
}));

export const MainSectionHeaderSubtitleLeft = styled.div(props => ({
  color: colors.grey,
  marginTop: 4,
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  '&:hover': props.href ? { color: colors.blue } : {},
}));

export const MainSectionHeaderTitleRightContainer = styled.div(() => ({
  marginLeft: '2rem',
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
  width: '1rem',
  marginLeft: '1rem',
}));

export const KeywordsContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginBottom: -8,
  marginLeft: 8,
}));

export const KeywordContainer = styled.div(({ isLast = false }) => ({
  marginBottom: 8,
  color: colors.blue,
  fontWeight: 'bold',
  marginRight: isLast ? 0 : '1rem',
  flexDirection: 'column',
  display: 'flex',
  // alignItems: 'center',
}));

export const Keyword = styled.div``;

export const PageBreakBefore = styled.div(() => ({
  breakBefore: 'page',
}));

export const PageBreakAfter = styled.div(() => ({
  breakAfter: 'page',
}));
