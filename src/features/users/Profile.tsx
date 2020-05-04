import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Descriptions, Card, Divider, PageHeader } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';

import { Dispatch, iRootState } from '../../state/store';
import { ProfileProps } from '../../state/profile/types';
import { Cover, Wrapper } from '../../shared/common/styles';
import RepositoryList from '../repos/RepositoryList';

const { Meta } = Card;

const Profile = () => {
  const dispatch = useDispatch<Dispatch>();
  const profileMainInfo: ProfileProps = useSelector(
    (state: iRootState) => state.profile
  );
  const { slug } = useParams();

  // LOAD MORE
  // TODO: Extract to a useLoadMore hooks
  const lastPageOfRepos = useMemo(() => {
    if (profileMainInfo.public_repos) {
      return Math.ceil(profileMainInfo.public_repos / 30);
    }

    return undefined;
  }, [profileMainInfo.public_repos]);

  const history = useHistory();
  const location = useLocation();
  // @ts-ignore
  const { from } = location.state || { from: { pathname: '/' } };

  const handleOnBackHeader = useCallback(() => {
    history.replace(from);
    dispatch.profile.cleanProfileAsync();
  }, [history, dispatch.profile, from]);

  useEffect(() => {
    dispatch.profile.fetchProfileInfoByUsername(slug);

    return () => {
      dispatch.profile.cleanProfileAsync();
    };
  }, [dispatch.profile, slug]);

  return (
    <Cover>
      <Wrapper>
        <>
          <PageHeader onBack={handleOnBackHeader} title="Back" />
          {!!profileMainInfo.avatar_url && (
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="avatar" src={profileMainInfo.avatar_url} />}
            >
              <Meta
                title={profileMainInfo.name}
                description={profileMainInfo.bio}
              />
            </Card>
          )}
          <Divider orientation="left">User Info</Divider>
          <Descriptions bordered size="small">
            <Descriptions.Item label="Company">
              {profileMainInfo.company}
            </Descriptions.Item>
            <Descriptions.Item label="Followers">
              {profileMainInfo.followers}
            </Descriptions.Item>
            <Descriptions.Item label="Public Repos">
              {profileMainInfo.public_repos}
            </Descriptions.Item>
            <Descriptions.Item label="Public Gists">
              {profileMainInfo.public_gists}
            </Descriptions.Item>
            <Descriptions.Item label="Following">
              {profileMainInfo.following}
            </Descriptions.Item>
            <Descriptions.Item label="Location">
              {profileMainInfo.location}
            </Descriptions.Item>
            <Descriptions.Item label="Blog">
              {profileMainInfo.blog}
            </Descriptions.Item>
          </Descriptions>
          <Divider orientation="left">Repos</Divider>
          <RepositoryList username={slug} lastPageOfRepos={lastPageOfRepos} />
        </>
      </Wrapper>
    </Cover>
  );
};

export default Profile;
