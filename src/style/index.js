import styled from '@emotion/styled';
import Icon from '@mdi/react';
import colors from './colors';

export { colors };

export const MainContainer = styled.div(props => ({
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  minHeight: '100vh',
  backgroundColor: colors.navy,
}));

export const ProfileContainer = styled.div(props => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: 192,
  padding: 16,
  '@media print': {
    minWidth: 160,
  },
}));

export const SectionsContainer = styled.div(props => ({
  padding: 16,
  backgroundColor: colors.white,
}));

export const MainSection = styled.div(props => ({
  display: 'flex',
  flexDirection: 'column',
  color: colors.black,
  marginRight: 48,
}));

export const MainSectionTitle = styled.h2(props => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderBottom: `1px solid ${colors.silver}`,
  color: colors.navy,
  marginLeft: 48,
}));

export const MainSectionTitleIcon = styled(Icon)(props => ({
  marginRight: 16,
  marginLeft: -48,
  width: '1.2em',
  fill: colors.navy,
  opacity: 0.8,
}));

export const MainSectionContent = styled.div(props => ({
  display: 'flex',
  flexDirection: 'column',
  color: colors.black,
  marginLeft: 48,
}));

export const HighlightContainer = styled.div(props => ({
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

export const MainSectionHeaderTitleLeftContainer = styled.div(props => ({}));

export const MainSectionHeaderTitleLeft = styled.div(props => ({
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

export const MainSectionHeaderTitleRightContainer = styled.div(props => ({
  marginLeft: '2em',
}));

export const MainSectionHeaderTitleRight = styled.div(props => ({
  color: colors.blue,
  fontWeight: 'bold',
  display: 'block',
  textDecoration: 'none',
}));

export const MainSectionHeaderTitleRightLink = styled.a(props => ({
  color: colors.blue,
  fontWeight: 'bold',
}));

export const MainSectionHeaderSubtitleRight = MainSectionHeaderSubtitleLeft;

export const MainSectionHeaderLinkIcon = styled(Icon)(props => ({
  fill: colors.grey,
  width: '1em',
  marginLeft: '1em',
}));

export const KeywordsContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
}));

export const KeywordContainer = styled.div(({ isLast = false }) => ({
  backgroundColor: colors.navy,
  border: `2px solid ${colors.blue}`,
  color: colors.white,
  padding: 8,
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'row',
  marginRight: isLast ? 0 : 8,
}));

export const Keyword = styled.div``;
