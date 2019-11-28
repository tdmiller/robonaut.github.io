import { mdiFormatQuoteClose, mdiFormatQuoteOpen } from '@mdi/js';
import React from 'react';

import {
  ReferenceContainer,
  ReferenceName,
  ReferenceQuoteIcon,
  ReferenceText,
} from '../style/reference';

const Reference = (reference, idx, isLast) => (
  <ReferenceContainer key={`reference-${idx}`} isLast={isLast}>
    <ReferenceText>
      <ReferenceQuoteIcon path={mdiFormatQuoteOpen} />
      {reference.reference}
      <ReferenceQuoteIcon path={mdiFormatQuoteClose} />
      <ReferenceName>{reference.name}</ReferenceName>
    </ReferenceText>
  </ReferenceContainer>
);

const References = ({ data = [] }) =>
  data.map((reference, idx) =>
    Reference(reference, idx, idx === data.length - 1)
  );

export default References;
