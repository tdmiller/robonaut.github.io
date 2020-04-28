import { mdiMarker } from '@mdi/js';
import PropTypes from 'prop-types';
import React from 'react';

import {
  WorkExperienceContainer,
  WorkExperienceContentContainer,
  WorkExperienceHeader,
  WorkExperienceHighlightContainer,
  WorkExperienceHighlightContentContainer,
  WorkExperienceHighlightIcon,
  WorkExperienceHighlightLink,
  WorkExperienceHighlightText,
  WorkExperienceHighlightTitle,
  WorkExperienceSummary,
} from '../style/work';

const WorkExperienceHighlight = ({ highlight, isLast }) => (
  <WorkExperienceHighlightContainer isLast={isLast}>
    <WorkExperienceHighlightContentContainer>
      <WorkExperienceHighlightTitle>
        <WorkExperienceHighlightIcon path={mdiMarker} />
        {highlight.title}
        {highlight.link && (
          <WorkExperienceHighlightLink href={highlight.link} target="_blank">
            [link]
          </WorkExperienceHighlightLink>
        )}
      </WorkExperienceHighlightTitle>
      <WorkExperienceHighlightText>
        {highlight.summary}
      </WorkExperienceHighlightText>
    </WorkExperienceHighlightContentContainer>
  </WorkExperienceHighlightContainer>
);

WorkExperienceHighlight.propTypes = {
  highlight: PropTypes.shape({
    title: PropTypes.string,
    summary: PropTypes.string,
    link: PropTypes.string,
  }),
  isLast: PropTypes.bool,
};

const WorkExperience = ({ experience, isFirst }) => (
  <WorkExperienceContainer isFirst={isFirst}>
    <WorkExperienceHeader
      titleLeft={experience.position}
      subtitleLeft={`${experience.startDate} - ${
        experience.endDate || 'present'
      }`}
      titleRight={experience.company}
      subtitleRight={experience.website}
      rightUrl={experience.website}
    />
    <WorkExperienceSummary
      removeMarginBottom={(experience.highlights || []).length === 0}
    >
      {experience.summary}
    </WorkExperienceSummary>
    {experience.highlights && (
      <WorkExperienceContentContainer>
        {experience.highlights.map((highlight, idx) => (
          <WorkExperienceHighlight
            key={`highligh-${idx}`}
            highlight={highlight}
            isLast={idx === experience.highlights.length - 1}
          />
        ))}
      </WorkExperienceContentContainer>
    )}
  </WorkExperienceContainer>
);

WorkExperience.propTypes = {
  experience: PropTypes.shape({
    position: PropTypes.string,
    summary: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    company: PropTypes.string,
    website: PropTypes.string,
    highlights: PropTypes.arrayOf(WorkExperienceHighlight.propTypes.highlight),
  }),
  isFirst: PropTypes.bool,
};

const Work = ({ data: experiences }) =>
  experiences.map((experience, idx) => (
    <WorkExperience
      key={`experience-${idx}`}
      experience={experience}
      isFirst={idx === 0}
    />
  ));

Work.propTypes = {
  data: PropTypes.arrayOf(WorkExperience.propTypes.experience),
};

export default Work;
