import React from 'react';
import MainSectionHeader from '../components/MainSectionHeader';
import {
  WorkExperienceContainer,
  WorkExperienceSummary,
  WorkExperienceContentContainer,
  WorkExperienceHighlightContainer,
} from '../style/work';

const WorkExperienceHighlight = ({ highlight }) => (
  <WorkExperienceHighlightContainer>
    {highlight}
  </WorkExperienceHighlightContainer>
);

const WorkExperience = ({ experience, isFirst }) => (
  <WorkExperienceContainer isFirst={isFirst}>
    <MainSectionHeader
      style={{
        backgroundColor: 'rgba(0,0,0,0.05)',
        padding: 8,
        borderRadius: 4,
      }}
      titleLeft={experience.position}
      subtitleLeft={`${experience.startDate} - ${experience.endDate ||
        'present'}`}
      titleRight={experience.company}
      subtitleRight={experience.website}
      rightUrl={experience.website}
    />
    <WorkExperienceSummary>{experience.summary}</WorkExperienceSummary>
    {experience.highlights && (
      <WorkExperienceContentContainer>
        {experience.highlights.map((highlight, idx) => (
          <WorkExperienceHighlight
            key={`highligh-${idx}`}
            highlight={highlight}
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
