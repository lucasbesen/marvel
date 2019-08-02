import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import heroesReducer from '../reducer/heroes/heroesReducer';

export const history = createBrowserHistory();

export default ({ initialState } = {}) => {
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
