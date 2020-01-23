import styled from '@emotion/styled';
import Icon from '@mdi/react';

import { MainSectionHeader } from '../components';
import colors from './colors';

export const WorkExperienceContainer = styled.div(({ isFirst = false }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: isFirst ? 0 : '2rem',
}));

export const WorkExperienceSummary = styled.div(props => ({
  marginBottom: props.removeMarginBottom ? 0 : '1rem',
  fontStyle: 'italic',
}));

export const WorkExperienceContentContainer = styled.div(() => ({}));

export const WorkExperienceHeader = styled(MainSectionHeader)(() => ({}));

export const WorkExperienceHighlightContainer = styled.div(props => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: props.isLast ? 0 : '1rem',
}));

export const WorkExperienceHighlightIcon = styled(Icon)(() => ({
  fill: colors.blue,
  width: '1em',
  flexShrink: 0,
  alignSelf: 'auto',
  opacity: 0.6,
}));

export const WorkExperienceHighlightContentContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '1rem',
}));

export const WorkExperienceHighlightTitle = styled.div(() => ({
  fontWeight: 'bold',
  marginBottom: 2,
}));

export const WorkExperienceHighlightLink = styled.a(() => ({
  color: colors.blue,
  marginLeft: '1rem',
}));

export const WorkExperienceHighlightText = styled.div(() => ({}));
