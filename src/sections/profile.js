import {
  mdiEmailOutline,
  mdiGithubCircle,
  mdiHomeMapMarker,
  mdiLinkedinBox,
  mdiPhone,
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
  ProfileContactContainer,
  ProfileContactIcon,
  ProfileContactLink,
  ProfileContent,
  ProfileLanguage,
  ProfileLanguages,
  ProfileLinks,
  ProfileStars,
} from '../style/profile';
import { ProfileContainer } from '../style/profile';

const languageStars = {
  Native: 5,
  Good: 4,
  Moderate: 3,
  Basic: 2,
  Beginner: 1,
};

const Profile = ({ profile = {}, languages = [] }) => {
  const {
    picture = '',
    name = '',
    label = '',
    location = {},
    profiles = [],
    email,
  } = profile;
  const iconPaths = {
    github: mdiGithubCircle,
    linkedin: mdiLinkedinBox,
    twitter: mdiTwitterCircle,
    email: mdiEmailOutline,
    soundcloud: mdiSoundcloud,
    address: mdiHomeMapMarker,
    phone: mdiPhone,
  };

  const renderLinks = () => (
    <ProfileLinks>
      {profiles.map(profile => (
        <ProfileContactLink
          key={`profile-${profile.network}</ProfileLinks>]}`}
          href={`mailto:${email}`}
        >
          <ProfileContactIcon path={iconPaths[profile.network]} />
          {profile.url.split('/').slice(-1)[0]}
        </ProfileContactLink>
      ))}
    </ProfileLinks>
  );

  const renderMe = () => (
    <ProfileContent>
      <Name>{name}</Name>
      <JobTitle>{label}</JobTitle>
    </ProfileContent>
  );

  const renderContact = () => (
    <ProfileContactContainer>
      <ProfileContactLink href={`mailto:${email}`}>
        <ProfileContactIcon path={iconPaths.email} />
        {email}
      </ProfileContactLink>
      <ProfileContactLink href={location.link} target="_blank">
        <ProfileContactIcon path={iconPaths.address} />
        {location.address}, {location.postalCode} {location.city} (
        {location.countryCode})
      </ProfileContactLink>
    </ProfileContactContainer>
  );

  const renderLanguages = () => (
    <>
      <ProfileLanguages>
        {languages.map(l => (
          <ProfileLanguage key={`language-${l.language}`}>
            {l.language}
          </ProfileLanguage>
        ))}
      </ProfileLanguages>
      <ProfileStars>
        {languages.map(l => (
          <Stars
            key={`language-${l.language}-stars`}
            rating={languageStars[l.fluency]}
          />
        ))}
      </ProfileStars>
    </>
  );

  return (
    <ProfileContainer>
      <Avatar src={picture} radius={10} />
      {renderMe()}
      {renderContact()}
      {renderLinks()}
      {renderLanguages()}
    </ProfileContainer>
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
