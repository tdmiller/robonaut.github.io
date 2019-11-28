import {
  mdiAccountCardDetails,
  mdiCodeTagsCheck,
  mdiDomain,
  mdiHeart,
  mdiSchool,
  mdiThumbUp,
  mdiTrophyAward,
} from '@mdi/js';
import PropTypes from 'prop-types';
import React from 'react';

import { MainSectionTitle, MainSectionTitleIcon } from '../style';

const iconMap = {
  basics: mdiAccountCardDetails,
  work: mdiDomain,
  skills: mdiCodeTagsCheck,
  education: mdiSchool,
  awards: mdiTrophyAward,
  references: mdiThumbUp,
  interests: mdiHeart,
};

function renderMainSectionTitle({ title, icon }) {
  return (
    <MainSectionTitle>
      <MainSectionTitleIcon path={iconMap[icon]} />
      {title}
    </MainSectionTitle>
  );
}

renderMainSectionTitle.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default renderMainSectionTitle;
