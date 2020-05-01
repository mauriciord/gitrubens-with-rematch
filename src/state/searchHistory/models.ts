import { SearchQuery } from './types';

type State = SearchQuery[];

export const searchHistory = {
  state: [],
  reducers: {
    addQuery(state: State, payload: string) {
      if (!state.includes(payload)) {
        return [...state, payload];
      }

      return state;
    },
  },
};
