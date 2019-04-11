import React from 'react';
import { KeywordsContainer, KeywordContainer, Keyword } from '../style';
import { SkillSectionContainer, SkillSectionTitle } from '../style/skills';

export const KeyWord = (word, idx, totalWords) => (
  <KeywordContainer key={`keyword-${idx}`} isLast={idx === totalWords - 1}>
    <Keyword>{word}</Keyword>
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
