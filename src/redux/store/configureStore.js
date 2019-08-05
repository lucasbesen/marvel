import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { History } from 'history';
import type { Store } from 'redux';

import heroesReducer from '../reducer/heroes/heroesReducer';

import type { State } from '../../types/State';

export const history: History = createBrowserHistory();

export default ({ initialState }: State = {}): Store => {
  const enhancer = compose(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history)),
  );

  return createStore(
    combineReducers({
      router: connectRouter(history),
      heroes: heroesReducer,
    }),
    initialState,
    enhancer,
  );
};
