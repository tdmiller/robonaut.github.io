import PropTypes from 'prop-types';
import React from 'react';

const Basics = ({ data }) => {
  return <div>{data.summary}</div>;
};

Basics.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    summary: PropTypes.string,
  }),
};

export default Basics;
