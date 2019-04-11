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

const Awards = ({ data = [] }) =>
  data.map((d, idx) => Award(d, idx, idx === data.length - 1));

export default Awards;
