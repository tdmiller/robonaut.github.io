import React from 'react';
import { HighlightIcon, HighlightContainer } from '../style';
import Stars from './Stars';
import {
  mdiLanguageCss3,
  mdiNodejs,
  mdiLanguageHtml5,
  mdiLanguagePython,
  mdiRuby,
  mdiAmazon,
} from '@mdi/js';

export default props => (
  <div>
    <HighlightContainer>
      <HighlightIcon path={mdiNodejs} />
      node.js
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
