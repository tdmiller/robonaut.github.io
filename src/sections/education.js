import PropTypes from 'prop-types';
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
    rightUrl="https://ugent.be"
    removeMarginBottom={isLast}
  />
);

School.propTypes = {
  institution: PropTypes.string,
  area: PropTypes.string,
  studyType: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};

const Education = ({ data = [] }) =>
  data.map((d, idx) => School(d, idx, idx === data.length - 1));

export default Education;
