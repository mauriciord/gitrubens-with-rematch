import { users } from './users/models';
import { repos } from './repos/models';

export interface RootModel {
  users: typeof users;
  repos: typeof repos;
}

export const models: RootModel = {
  users,
  repos,
};
