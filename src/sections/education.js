import React from 'react';
import MainSectionHeader from '../components/MainSectionHeader';

const School = ({ institution, area, studyType, startDate, endDate }, idx) => (
  <MainSectionHeader
    key={`school-${idx}`}
    titleLeft={`${studyType} - ${area}`}
    subtitleLeft={`${startDate} - ${endDate}`}
    titleRight={institution}
    subtitleRight="https://ugent.be"
  />
);

const Education = ({ data = [] }) => data.map(School);

export default Education;
