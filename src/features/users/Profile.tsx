import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, iRootState } from '../../state/store';
import { User } from '../../state/users/types';

type ProfileProps = {
  user: User | null;
};

const Profile = ({ user }: ProfileProps) => {
  const dispatch = useDispatch<Dispatch>();
  const repoListIds = useSelector((state: iRootState) => state.repos.result);
  const repoList: User[] = useSelector(
    (state: iRootState) => state.repos.entities.repos
  );

  useEffect(() => {
    if (user) {
      dispatch.repos.searchReposByUser(user.login);
    }
  }, [dispatch.repos, user]);

  console.log('PROFILE ========/', { repoListIds, repoList });

  return <div>Profile</div>;
};

export default Profile;
