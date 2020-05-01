import api from './api';

type FindParams = {
  user: string;
  page?: number;
  per_page?: number;
  order?: string;
  sort?: string;
};

export const findReposFromUser = ({
  user,
  page,
  per_page,
  order,
  sort,
}: FindParams) =>
  api.get(`/users/${user}/repos`, {
    params: {
      ...(page && { page }),
      ...(per_page && { per_page }),
      ...(order && { order }),
      ...(sort && { sort }),
    },
  });
