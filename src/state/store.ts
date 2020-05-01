import { init, RematchRootState, RematchDispatch } from '@rematch/core';
import selectPlugin from '@rematch/select';
import createRematchPersist from '@rematch/persist';

import { RootModel } from './rootModel';
import { models } from './rootModel';

const persistPlugin = createRematchPersist({
  whitelist: ['users', 'searchHistory'],
  throttle: 5000,
  version: 2,
});

export const store = init({
  models,
  plugins: [selectPlugin(), persistPlugin],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type iRootState = RematchRootState<RootModel>;
