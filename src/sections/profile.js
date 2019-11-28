import {
  mdiEmailOutline,
  mdiGithubCircle,
  mdiLinkedinBox,
  mdiSoundcloud,
  mdiTwitterCircle,
} from '@mdi/js';
import PropTypes from 'prop-types';
import React from 'react';

import { Stars } from '../components';
import {
  Avatar,
  JobTitle,
  Name,
  ProfileContent,
  ProfileEmail,
  ProfileEmailIcon,
  ProfileEmailLink,
  ProfileIcon,
  ProfileLanguage,
  ProfileLanguages,
  ProfileLinks,
} from '../style/profile';

const languageStars = {
  Native: 5,
  Good: 4,
  Moderate: 3,
  Basic: 2,
  Beginner: 1,
};

const Profile = ({ profile = {}, languages = [], children }) => {
  const { picture = '', name = '', label = '', profiles = [], email } = profile;
  const iconPaths = {
    github: mdiGithubCircle,
    linkedin: mdiLinkedinBox,
    twitter: mdiTwitterCircle,
    email: mdiEmailOutline,
    soundcloud: mdiSoundcloud,
  };

  return (
    <ProfileContent>
      <Avatar src={picture} radius={20} />
      <Name>{name}</Name>
      <JobTitle>{label}</JobTitle>
      <ProfileLinks>
        {profiles.map(profile => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            key={`link-${profile.network}`}
            href={profile.url}
          >
            <ProfileIcon path={iconPaths[profile.network]} />
          </a>
        ))}
      </ProfileLinks>
      <ProfileEmail>
        <ProfileEmailLink href={`mailto:${email}`}>
          <ProfileEmailIcon path={iconPaths.email} />
          {email}
        </ProfileEmailLink>
      </ProfileEmail>
      <ProfileLanguages>
        {languages.map(l => (
          <ProfileLanguage key={`language-${l.language}`}>
            {l.language}
            <Stars rating={languageStars[l.fluency]} />
          </ProfileLanguage>
        ))}
      </ProfileLanguages>
      {children}
    </ProfileContent>
  );
};

Profile.propTypes = {
  profile: PropTypes.object,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      language: PropTypes.string,
      fluency: PropTypes.string,
    })
  ),
  children: PropTypes.elementType,
};

export default Profile;
