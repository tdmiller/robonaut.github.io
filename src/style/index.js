import styled from '@emotion/styled';
import Icon from '@mdi/react';

export const colors = {
  white: '#ffffff',
  yellow: '#FFDC00',
  silver: '#DDDDDD',
  grey: '#AAAAAA',
  black: '#111111',
  aqua: '#7FDBFF',
  blue: '#0074D9',
  navy: '#001f3f',
  red: '#FF4136',
};

export const MainContainer = styled.div(props => ({
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  minHeight: '100vh',
  backgroundColor: colors.navy,
}));

export const LeftContainer = styled.div(props => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: 192,
  padding: 24,
}));

export const RightContainer = styled.div(props => ({
  padding: 16,
  backgroundColor: colors.white,
}));

export const MainSection = styled.div(props => ({
  display: 'flex',
  flexDirection: 'column',
  color: colors.black,
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
  marginBottom: '1em',
}));

export const MainSectionHeaderTitleLeftContainer = styled.div(props => ({}));

export const MainSectionHeaderTitleLeft = styled.div(props => ({
  fontWeight: 'bold',
  color: colors.navy,
}));

export const MainSectionHeaderSubtitleLeft = styled.div(props => ({
  color: colors.grey,
  fontSize: '0.8em',
  marginTop: 4,
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

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
  // fontWeight: 'bolder',
  padding: 8,
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'row',
  marginRight: isLast ? 0 : 8,
}));

export const Keyword = styled.div``;
