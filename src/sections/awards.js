import PropTypes from 'prop-types';
import React from 'react';

import MainSectionHeader from '../components/MainSectionHeader';

const Award = ({ title, date }, idx, isLast) => (
  <MainSectionHeader
    key={`award-${idx}`}
    titleLeft={title}
    subtitleLeft={date}
    removeMarginBottom={isLast}
  />
);

Award.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
};

const Awards = ({ data = [] }) =>
  data.map((d, idx) => Award(d, idx, idx === data.length - 1));

export default Awards;
