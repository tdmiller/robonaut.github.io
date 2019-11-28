import PropTypes from 'prop-types';
import React from 'react';

import { Keyword, KeywordContainer, KeywordsContainer } from '../style';
import { SkillSectionContainer, SkillSectionTitle } from '../style/skills';

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

Interest.propTypes = {
  name: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

const Interests = ({ data = [] }) => data.map(Interest);

export default Interests;
