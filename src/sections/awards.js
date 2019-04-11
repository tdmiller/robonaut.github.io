import React from 'react';
import MainSectionHeader from '../components/MainSectionHeader';

const Award = ({ title, date }, idx) => (
  <MainSectionHeader
    key={`award-${idx}`}
    titleLeft={title}
    subtitleLeft={date}
  />
);

const Awards = ({ data = [] }) => data.map(Award);

export default Awards;
