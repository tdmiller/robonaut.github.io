import { mdiStar, mdiStarOutline } from '@mdi/js';
import PropTypes from 'prop-types';
import React from 'react';

import { colors, Star } from '../style';

function Stars({ rating, style, starStyle }) {
  return (
    <div style={style}>
      {new Array(5).fill().map((_, idx) => (
        <Star
          style={starStyle}
          key={`star-${idx}`}
          path={rating > idx ? mdiStar : mdiStarOutline}
          fill={rating > idx ? colors.yellow : colors.grey}
        />
      ))}
    </div>
  );
}

Stars.propTypes = {
  rating: PropTypes.number,
  style: PropTypes.object,
  starStyle: PropTypes.object,
};

export default Stars;
