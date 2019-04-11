import React from 'react';
import {
  ReferenceContainer,
  ReferenceText,
  ReferenceName,
  ReferenceQuoteIcon,
} from '../style/reference';
import Icon from '@mdi/react';
import { mdiFormatQuoteOpen, mdiFormatQuoteClose } from '@mdi/js';

const Reference = (reference, idx) => (
  <ReferenceContainer key={`reference-${idx}`}>
    <ReferenceText>
      <ReferenceQuoteIcon path={mdiFormatQuoteOpen} />
      {reference.reference}
      <ReferenceQuoteIcon path={mdiFormatQuoteClose} />
      <ReferenceName>{reference.name}</ReferenceName>
    </ReferenceText>
  </ReferenceContainer>
);

const References = ({ data = [] }) => data.map(Reference);

export default References;
