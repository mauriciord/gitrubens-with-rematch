import { users } from './users/models';
import { repos } from './repos/models';
import { searchHistory } from './searchHistory/models';

export interface RootModel {
  users: typeof users;
  repos: typeof repos;
  searchHistory: typeof searchHistory;
}

export const models: RootModel = {
  users,
  repos,
  searchHistory,
};
