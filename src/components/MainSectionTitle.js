import React from 'react';
import { MainSectionTitle, MainSectionTitleIcon } from '../style';
import {
  mdiAccountCardDetails,
  mdiDomain,
  mdiCodeTagsCheck,
  mdiSchool,
  mdiTrophyAward,
  mdiThumbUp,
  mdiHeart,
} from '@mdi/js';

const iconMap = {
  basics: mdiAccountCardDetails,
  work: mdiDomain,
  skills: mdiCodeTagsCheck,
  education: mdiSchool,
  awards: mdiTrophyAward,
  references: mdiThumbUp,
  interests: mdiHeart,
};

export default ({ title, icon }) => (
  <MainSectionTitle>
    <MainSectionTitleIcon path={iconMap[icon]} />
    {title}
  </MainSectionTitle>
);
