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

import {
  Avatar,
  JobTitle,
  Name,
  ProfileContactContainer,
  ProfileContactIcon,
  ProfileContactLink,
  ProfileContent,
  ProfileMe,
} from '../style/profile';
import { ProfileContainer } from '../style/profile';

const Profile = ({ profile = {} }) => {
  const { picture = '', name = '', label = '', profiles = [], email } = profile;
  const iconPaths = {
    github: mdiGithubCircle,
    linkedin: mdiLinkedinBox,
    twitter: mdiTwitterCircle,
    email: mdiEmailOutline,
    soundcloud: mdiSoundcloud,
    address: mdiHomeMapMarker,
    phone: mdiPhone,
  };

  const renderMe = () => (
    <ProfileMe>
      <Name>{name}</Name>
      <JobTitle>{label}</JobTitle>
    </ProfileMe>
  );

  const renderContact = () => (
    <ProfileContactContainer>
      <ProfileContactLink href={`mailto:${email}`}>
        <ProfileContactIcon path={iconPaths.email} />
        {email}
      </ProfileContactLink>
      {profiles.map(profile => (
        <ProfileContactLink
          key={`profile-${profile.network}</ProfileLinks>]}`}
          href={profile.url}
          target="_blank"
        >
          <ProfileContactIcon path={iconPaths[profile.network]} />
          {profile.url.split('/').slice(-1)[0]}
        </ProfileContactLink>
      ))}
    </ProfileContactContainer>
  );

  return (
    <ProfileContainer>
      <Avatar src={picture} />
      <ProfileContent>
        {renderMe()}
        {renderContact()}
      </ProfileContent>
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
