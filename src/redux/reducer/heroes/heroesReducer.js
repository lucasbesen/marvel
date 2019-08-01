import createReducer from '../createReducer';
import { HERO, HEROES, PAGINATION } from './actions';

const initialState = {
  hero: {},
  heroes: [],
  pagination: {},
};

const heroesReducer = createReducer(initialState, {
  [HERO]: (state, action) => ({
    ...state,
    hero: action.payload,
  }),
  [HEROES]: (state, action) => ({
    ...state,
    heroes: action.payload,
  }),
  [PAGINATION]: (state, action) => ({
    ...state,
    pagination: action.payload,
  }),
});

export default heroesReducer;
