import { mdiFormatQuoteClose, mdiFormatQuoteOpen } from '@mdi/js';
import React from 'react';

import {
  ReferenceContact,
  ReferenceContainer,
  ReferenceName,
  ReferenceQuoteIcon,
  ReferenceRelation,
  ReferenceText,
} from '../style/reference';

const Reference = (reference, idx, isLast) => (
  <ReferenceContainer key={`reference-${idx}`} isLast={isLast}>
    <ReferenceText>
      <ReferenceQuoteIcon path={mdiFormatQuoteOpen} />
      {reference.reference}
      <ReferenceQuoteIcon path={mdiFormatQuoteClose} />
      <ReferenceContact>
        <ReferenceName href={reference.url} target="_blank" as="a">
          {reference.name}
        </ReferenceName>
        <ReferenceRelation>{reference.relation}</ReferenceRelation>
      </ReferenceContact>
    </ReferenceText>
  </ReferenceContainer>
);

const References = ({ data = [] }) =>
  data.map((reference, idx) =>
    Reference(reference, idx, idx === data.length - 1)
  );

export default References;
