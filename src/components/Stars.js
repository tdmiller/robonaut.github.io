import React from 'react';
import { Star, colors } from '../style';
import { mdiStar, mdiStarOutline } from '@mdi/js';

export default ({ rating, style, starStyle }) => (
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
