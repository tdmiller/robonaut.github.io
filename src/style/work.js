import styled from '@emotion/styled';
import Icon from '@mdi/react';
import { MainSectionHeader } from '../components';
import colors from './colors';

export const WorkExperienceContainer = styled.div(({ isFirst = false }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: isFirst ? 0 : '2em',
}));

export const WorkExperienceSummary = styled.div(props => ({
  fontSize: '0.8em',
  marginBottom: props.removeMarginBottom ? 0 : '2em',
  fontStyle: 'italic',
}));

export const WorkExperienceContentContainer = styled.div(props => ({}));

export const WorkExperienceHeader = styled(MainSectionHeader)(props => ({
  backgroundColor: colors.whiteDarker,
  padding: 8,
  borderRadius: 4,
}));

export const WorkExperienceHighlightContainer = styled.div(props => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: props.isLast ? 0 : '1em',
}));

export const WorkExperienceHighlightIcon = styled(Icon)(props => ({
  fill: colors.blue,
  width: '1em',
  flexShrink: 0,
  alignSelf: 'auto',
  opacity: 0.6,
}));

export const WorkExperienceHighlightText = styled.div(props => ({
  marginLeft: '1em',
}));
