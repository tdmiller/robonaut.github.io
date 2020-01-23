import { mdiStar, mdiStarOutline } from '@mdi/js';
import PropTypes from 'prop-types';
import React from 'react';

import { colors, Star } from '../style';

function Stars({ rating, style, starStyle, fillColor, outlineColor }) {
  return (
    <div style={style}>
      {new Array(5).fill().map((_, idx) => (
        <Star
          style={starStyle}
          key={`star-${idx}`}
          path={rating > idx ? mdiStar : mdiStarOutline}
          fill={
            rating > idx
              ? fillColor ?? colors.yellow
              : outlineColor ?? colors.grey
          }
        />
      ))}
    </div>
  );
}

Stars.propTypes = {
  rating: PropTypes.number,
  style: PropTypes.object,
  starStyle: PropTypes.object,
  fillColor: PropTypes.string,
  outlineColor: PropTypes.string,
};

export default Stars;
