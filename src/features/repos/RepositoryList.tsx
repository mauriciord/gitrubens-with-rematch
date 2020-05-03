import React, { useEffect, useState } from 'react';
import { Button, List } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RepoListActions } from './styles';
import { Dispatch, iRootState } from '../../state/store';
import { Repository, RepoList } from '../../state/repos/types';

type RepositoryListProps = {
  lastPageOfRepos?: number;
  username: string;
};

const RepositoryList = ({ lastPageOfRepos, username }: RepositoryListProps) => {
  const dispatch = useDispatch<Dispatch>();
  const repoListIds = useSelector((state: iRootState) => state.repos.result);
  const repoList: RepoList = useSelector(
    (state: iRootState) => state.repos.entities.repos
  );
  const [reposCurrentPage, setReposCurrentPage] = useState(1);
  const loadMore = repoListIds.length > 0 &&
    lastPageOfRepos &&
    reposCurrentPage < lastPageOfRepos && (
      <RepoListActions>
        <Button
          onClick={() => {
            const nextPage = reposCurrentPage + 1;
            setReposCurrentPage(nextPage);
            dispatch.repos.searchReposByUser({
              user: username,
              page: nextPage,
            });
          }}
        >
          load more
        </Button>
      </RepoListActions>
    );

  useEffect(() => {
    dispatch.repos.searchReposByUser({ user: username });
  }, [dispatch.repos, username]);

  return (
    <List
      size="small"
      bordered
      dataSource={repoListIds}
      loadMore={loadMore}
      renderItem={(repoId: number) => {
        const repository: Repository = repoList[repoId];

        return (
          <List.Item
            actions={[
              repository.homepage && (
                <a
                  href={repository.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
  );
};

export default RepositoryList;
