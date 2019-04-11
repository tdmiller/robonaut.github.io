import React from 'react';
import {
  Avatar,
  Name,
  JobTitle,
  ProfileContent,
  ProfileLinks,
  ProfileIcon,
  ProfileEmail,
  ProfileEmailIcon,
  ProfileEmailLink,
  ProfileLanguages,
  ProfileLanguage,
} from '../style/profile';
import { Stars } from '../components';
import {
  mdiGithubCircle,
  mdiLinkedinBox,
  mdiTwitterCircle,
  mdiEmailOutline,
} from '@mdi/js';

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
  };
  return (
    <ProfileContent>
      <Avatar src={picture} radius={20} />
      <Name>{name}</Name>
      <JobTitle>{label}</JobTitle>
      <ProfileLinks>
        {profiles.map(profile => (
          <a target="_blank" key={`link-${profile.network}`} href={profile.url}>
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

export default Profile;
