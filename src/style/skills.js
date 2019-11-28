import styled from '@emotion/styled';

export const SkillSectionContainer = styled.div(({ isFirst = false }) => ({
  marginTop: isFirst ? 0 : '1em',
}));

export const SkillSectionTitle = styled.div(() => ({
  fontWeight: 'bold',
  marginBottom: '1em',
}));
