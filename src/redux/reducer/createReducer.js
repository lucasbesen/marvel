const createReducer = (initialState, actions) => {
  return (state = initialState, action) => {
    if (actions[action.type]) {
      return actions[action.type](state, action);
    }
    return state;
  };
};

export default createReducer;
