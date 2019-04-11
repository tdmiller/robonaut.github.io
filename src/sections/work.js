import React from 'react';
import { mdiMarker } from '@mdi/js';
import {
  WorkExperienceContainer,
  WorkExperienceSummary,
  WorkExperienceContentContainer,
  WorkExperienceHighlightContainer,
  WorkExperienceHighlightIcon,
  WorkExperienceHighlightText,
  WorkExperienceHeader,
} from '../style/work';

const WorkExperienceHighlight = ({ highlight, isLast }) => (
  <WorkExperienceHighlightContainer isLast={isLast}>
    <WorkExperienceHighlightIcon path={mdiMarker} />
    <WorkExperienceHighlightText>{highlight}</WorkExperienceHighlightText>
  </WorkExperienceHighlightContainer>
);

const WorkExperience = ({ experience, isFirst }) => (
  <WorkExperienceContainer isFirst={isFirst}>
    <WorkExperienceHeader
      titleLeft={experience.position}
      subtitleLeft={`${experience.startDate} - ${experience.endDate ||
        'present'}`}
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

const Work = ({ data: experiences }) =>
  experiences.map((experience, idx) => (
    <WorkExperience
      key={`experience-${idx}`}
      experience={experience}
      isFirst={idx === 0}
    />
  ));

export default Work;
