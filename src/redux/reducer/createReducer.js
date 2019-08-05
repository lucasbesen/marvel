import type { Action } from '../../types/Action';
import type { State } from '../../types/State';

const createReducer = (initialState: State, actions: Action): State => {
  return (state = initialState, action) => {
    if (actions[action.type]) {
      return actions[action.type](state, action);
    }
    return state;
  };
};

export default createReducer;
