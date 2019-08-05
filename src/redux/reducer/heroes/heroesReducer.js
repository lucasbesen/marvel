import createReducer from '../createReducer';
import { HERO, HEROES, PAGINATION } from './actions';

import type { State } from '../../../types/State';
import type { Action } from '../../../types/Action';

const initialState: State = {
  hero: {},
  heroes: [],
  pagination: {},
};

const heroesReducer = createReducer(initialState, {
  [HERO]: (state: State, action: Action) => ({
    ...state,
    hero: action.payload,
  }),
  [HEROES]: (state: State, action: Action) => ({
    ...state,
    heroes: action.payload,
  }),
  [PAGINATION]: (state: State, action: Action) => ({
    ...state,
    pagination: action.payload,
  }),
});

export default heroesReducer;
