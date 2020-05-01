import React from 'react';
import { useParams } from 'react-router-dom';

// import Profile from './Profile';

const ProfilePage = () => {
  const { slug } = useParams();

  // TODO: Make Profile component get all data from user, maybe with redux structure
  return <div>Profile: {slug}</div>;
};

export default ProfilePage;
