import styled from '@emotion/styled';
import Icon from '@mdi/react';

import colors from './colors';

export const ReferenceContainer = styled.div(({ isLast }) => ({
  marginBottom: isLast ? 0 : 24,
}));

export const ReferenceText = styled.div(() => ({}));

export const ReferenceContact = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  marginTop: '0.5rem',
}));

export const ReferenceName = styled.div(() => ({
  fontWeight: 'bold',
  textDecoration: 'none',
  color: colors.blue,
}));

export const ReferenceQuoteIcon = styled(Icon)(() => ({
  fill: colors.grey,
  width: '1em',
  alignSelf: 'start',
}));

export const ReferenceRelation = styled.span(() => ({
  color: colors.grey,
  marginLeft: '1rem',
  fontSize: '0.8rem',
}));
