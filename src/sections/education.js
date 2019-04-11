import React from 'react';
import MainSectionHeader from '../components/MainSectionHeader';

const School = (
  { institution, area, studyType, startDate, endDate },
  idx,
  isLast
) => (
  <MainSectionHeader
    key={`school-${idx}`}
    titleLeft={`${studyType} - ${area}`}
    subtitleLeft={`${startDate} - ${endDate}`}
    titleRight={institution}
    subtitleRight="https://ugent.be"
    removeMarginBottom={isLast}
  />
);

const Education = ({ data = [] }) =>
  data.map((d, idx) => School(d, idx, idx === data.length - 1));

export default Education;
