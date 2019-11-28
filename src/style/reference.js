import styled from '@emotion/styled';
import Icon from '@mdi/react';

import colors from './colors';

export const ReferenceContainer = styled.div(({ isLast }) => ({
  // borderLeft: `4px solid ${colors.silver}`,
  // paddingLeft: 8,
  marginBottom: isLast ? 0 : 24,
}));

export const ReferenceText = styled.div(() => ({}));

export const ReferenceName = styled.div(() => ({
  // fontStyle: 'italic',
  fontWeight: 'bold',
  color: colors.blue,
  display: 'inline-block',
  marginLeft: '1em',
}));

export const ReferenceQuoteIcon = styled(Icon)(() => ({
  fill: colors.grey,
  width: '1em',
  alignSelf: 'start',
}));
