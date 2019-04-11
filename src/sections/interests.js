import React from 'react';
import { KeywordsContainer, KeywordContainer, Keyword } from '../style';
import { SkillSectionTitle, SkillSectionContainer } from '../style/skills';

const InterestKeyWord = (keyword, idx) => (
  <KeywordContainer key={`keyword-${idx}`} isFirst={idx === 0}>
    <Keyword>{keyword}</Keyword>
  </KeywordContainer>
);

const Interest = ({ name, keywords }, idx) => (
  <SkillSectionContainer key={`interest-${idx}`} isFirst={idx === 0}>
    <SkillSectionTitle>{name}</SkillSectionTitle>
    <KeywordsContainer>{keywords.map(InterestKeyWord)}</KeywordsContainer>
  </SkillSectionContainer>
);

const Interests = ({ data = [] }) => data.map(Interest);

export default Interests;
