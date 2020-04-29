import { init, RematchRootState, RematchDispatch } from '@rematch/core';
import selectPlugin from '@rematch/select';
import createRematchPersist from '@rematch/persist';

import { RootModel } from './rootModel';

const persistPlugin = createRematchPersist({
  whitelist: [],
  throttle: 5000,
  version: 1,
});

export const store = init({
  plugins: [selectPlugin(), persistPlugin],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type iRootState = RematchRootState<RootModel>;
