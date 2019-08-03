import createReducer from '../createReducer';

const initialState = 0;
const reducer = createReducer(initialState, {
  INCREMENT: state => state + 1,
  DECREMENT: state => state - 1,
});

it('should create a reducer', () => {
  const previousState = 0;
  const action = { type: 'INCREMENT' };
  const after = 1;

  expect(reducer(previousState, action)).toEqual(after);
});

it('should return initial state if last state is undefined', () => {
  const previous = undefined;
  const action = {};

  expect(reducer(previous, action)).toEqual(initialState);
});

it('should return a state if is a unknown action', () => {
  const previousState = 3;
  const action = { type: 'ANOTHER_ACTION' };
  const after = 3;

  expect(reducer(previousState, action)).toEqual(after);
});
