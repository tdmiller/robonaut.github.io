import styled from '@emotion/styled';

import { colors } from '.';

export const SkillSectionContainer = styled.div(({ isFirst = false }) => ({
  marginTop: isFirst ? 0 : '1em',
}));

export const SkillSectionTitle = styled.div(() => ({
  backgroundColor: colors.whiteDarker,
  padding: 8,
  borderRadius: 4,
  fontWeight: 'bold',
  marginBottom: '1em',
}));
