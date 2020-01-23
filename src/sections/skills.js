import React from 'react';

import { Stars } from '../components';
import { colors, Keyword, KeywordContainer, KeywordsContainer } from '../style';
import { SkillSectionContainer, SkillSectionTitle } from '../style/skills';

export const KeyWord = (word, idx, totalWords) => (
  <KeywordContainer key={`keyword-${idx}`} isLast={idx === totalWords - 1}>
    <Keyword>{word.name ?? word}</Keyword>
    {word.stars ? (
      <Stars
        rating={word.stars}
        fillColor={colors.blue}
        outlineColor={colors.blue}
        style={{ lineHeight: '0.5rem' }}
        starStyle={{ width: '0.6rem' }}
      />
    ) : null}
  </KeywordContainer>
);

const SkillSection = (d, idx) => (
  <SkillSectionContainer isFirst={idx === 0} key={`skill-${idx}`}>
    <SkillSectionTitle>{d.name}</SkillSectionTitle>
    <KeywordsContainer>
      {d.keywords.map((word, idx) => KeyWord(word, idx, d.keywords.length))}
    </KeywordsContainer>
  </SkillSectionContainer>
);

const Skills = ({ data = [] }) => data.map(SkillSection);

export default Skills;
