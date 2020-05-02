import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Descriptions, Card, Divider, List, Button, PageHeader } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';

import { Dispatch, iRootState } from '../../state/store';
import { User } from '../../state/users/types';
import { ProfileProps } from '../../state/profile/types';
import {
  Cover,
  Wrapper,
  Logo,
  Search,
  SearchForm as Form,
  FormItem,
} from '../../shared/common/styles';
import { Repository, RepoList } from '../../state/repos/types';
import { repo } from '../../state/repos/schema';

const { Meta } = Card;

const Profile = () => {
  const dispatch = useDispatch<Dispatch>();
  const repoListIds = useSelector((state: iRootState) => state.repos.result);
  const repoList: RepoList = useSelector(
    (state: iRootState) => state.repos.entities.repos
  );
  const profileMainInfo: ProfileProps = useSelector(
    (state: iRootState) => state.profile
  );
  const { slug } = useParams();
  const [reposCurrentPage, setReposCurrentPage] = useState(1);

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
  }, [history, dispatch.repos]);

  useEffect(() => {
    dispatch.profile.fetchProfileInfoByUsername(slug);
    dispatch.repos.searchReposByUser({ user: slug });

    return () => {
      dispatch.profile.cleanProfileAsync();
    };
  }, [dispatch.repos, dispatch.profile, slug]);

  console.log('PROFILE ========/', {
    profileMainInfo,
    repoListIds,
    repoList,
    lastPageOfRepos,
  });

  const loadMore =
    repoListIds.length > 0 &&
    lastPageOfRepos &&
    reposCurrentPage < lastPageOfRepos ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button
          onClick={() => {
            const nextPage = reposCurrentPage + 1;
            setReposCurrentPage(nextPage);
            dispatch.repos.searchReposByUser({ user: slug, page: nextPage });
          }}
        >
          loading more
        </Button>
      </div>
    ) : null;

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
          <br />
          <Descriptions title="User Info" bordered size="small">
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
          <List
            size="small"
            footer={<div>Footer</div>}
            bordered
            dataSource={repoListIds}
            loadMore={loadMore}
            renderItem={(repoId: number) => {
              const repository: Repository = repoList[repoId];

              return (
                <List.Item
                  actions={[
                    repository.homepage && (
                      <a href={repository.homepage} target="_blank">
                        Homepage
                      </a>
                    ),
                  ]}
                >
                  <List.Item.Meta
                    title={repository.name}
                    description={repository.html_url}
                  />
                </List.Item>
              );
            }}
          />
        </>
      </Wrapper>
    </Cover>
  );
};

export default Profile;
