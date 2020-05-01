import { normalize } from 'normalizr';

import { Dispatch } from '../store';
import githubAPI from '../../services/github';
import * as schema from './schema';

import { Repository } from './types';

type State = {
  entities: {
    repos: Repository[];
  };
  result: number[];
};

export const repos = {
  state: {
    entities: { repos: [] },
    result: [],
  },
  reducers: {
    addRepos(state: State, payload: State) {
      const {
        entities: { repos },
        result,
      } = payload;

      return {
        entities: { repos },
        result,
      };
    },
  },
  effects: (dispatch: Dispatch) => ({
    async searchReposByUser(queryUser: string) {
      const { data: response } = await githubAPI.repos.findReposFromUser({
        user: queryUser,
      });

      dispatch.repos.addRepos(normalize(response, schema.arrayOfRepos));
    },
  }),
};
