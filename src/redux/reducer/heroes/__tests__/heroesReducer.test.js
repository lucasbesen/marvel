import { heroMock } from '../../../../mocks/heroes';
import { HERO, HEROES } from '../actions';
import heroesReducer from '../heroesReducer';

it('should return a heroes array', () => {
  const initial = {};
  const action = { type: HEROES, payload: [{ ...heroMock }] };
  const after = { heroes: [{ ...heroMock }] };

  expect(heroesReducer(initial, action)).toEqual(after);
});

it('should return a hero', () => {
  const initial = {};
  const action = { type: HERO, payload: heroMock };
  const after = { hero: heroMock };

  expect(heroesReducer(initial, action)).toEqual(after);
});
