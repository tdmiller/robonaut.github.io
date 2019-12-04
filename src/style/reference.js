import styled from '@emotion/styled';
import Icon from '@mdi/react';

import colors from './colors';

export const ReferenceContainer = styled.div(({ isLast }) => ({
  marginBottom: isLast ? 0 : 24,
}));

export const ReferenceText = styled.div(() => ({}));

export const ReferenceName = styled.div(() => ({
  fontWeight: 'bold',
  color: colors.blue,
  display: 'block',
  marginTop: 8,
  marginLeft: 0,
}));

export const ReferenceQuoteIcon = styled(Icon)(() => ({
  fill: colors.grey,
  width: '1em',
  alignSelf: 'start',
}));
