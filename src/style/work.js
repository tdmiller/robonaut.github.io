import styled from '@emotion/styled';

export const WorkExperienceContainer = styled.div(({ isFirst = false }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: isFirst ? 0 : '1em',
}));

export const WorkExperienceSummary = styled.div(props => ({
  fontSize: '0.8em',
  fontStyle: 'italic',
}));

export const WorkExperienceContentContainer = styled.ul`
  padding-inline-start: 1em;
`;

export const WorkExperienceHighlightContainer = styled.li(props => ({
  listStyle: 'square',
}));
