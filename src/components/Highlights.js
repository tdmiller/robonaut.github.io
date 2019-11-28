import {
  mdiAmazon,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguagePython,
  mdiNodejs,
  mdiRuby,
} from '@mdi/js';
import React from 'react';

import { HighlightContainer, HighlightIcon } from '../style';
import Stars from './Stars';

export default () => (
  <div>
    <HighlightContainer>
      <HighlightIcon path={mdiNodejs} />
      <Stars rating={5} />
    </HighlightContainer>
    <HighlightContainer>
      <HighlightIcon path={mdiLanguageCss3} />
    </HighlightContainer>
    <HighlightContainer>
      <HighlightIcon path={mdiLanguageHtml5} />
    </HighlightContainer>
    <HighlightContainer>
      <HighlightIcon path={mdiLanguagePython} />
    </HighlightContainer>
    <HighlightContainer>
      <HighlightIcon path={mdiRuby} />
    </HighlightContainer>
    <HighlightContainer>
      <HighlightIcon path={mdiAmazon} />
    </HighlightContainer>
  </div>
);
