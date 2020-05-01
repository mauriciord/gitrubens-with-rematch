import { normalize } from 'normalizr';

import { Dispatch } from '../store';
import githubAPI from '../../services/github';
import * as schema from './schema';

import { User } from './types';

type State = {
  entities: {
    users: User[];
  };
  result: number[];
};

export const users = {
  state: {
    entities: { users: [] },
    result: [],
  },
  reducers: {
    addUsers(state: State, payload: State) {
      const {
        entities: { users },
        result,
      } = payload;

      return {
        entities: { users },
        result,
      };
    },
  },
  effects: (dispatch: Dispatch) => ({
    async searchUserByQuery(query: string) {
      const { data } = await githubAPI.users.findUser({ query });
      const response = data.items.map((item: any) => ({ ...item }));

      dispatch.users.addUsers(normalize(response, schema.arrayOfUsers));
      dispatch.searchHistory.addQuery(query);
    },
  }),
};
