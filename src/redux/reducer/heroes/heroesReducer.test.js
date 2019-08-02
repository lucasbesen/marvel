import { HERO, HEROES, PAGINATION } from "./actions";
import heroesReducer from "./heroesReducer";

const captainAmerica = {
  id: 1,
  name: 'Captain America',
};

it("should return a heroes array", () => {
  const initial = {};
  const action = { type: HEROES, payload: [{ ...captainAmerica }] };
  const after = { heroes: [{ ...captainAmerica }] };

  expect(heroesReducer(initial, action)).toEqual(after);
});

it("should return a hero", () => {
  const initial = {};
  const action = { type: HERO, payload: captainAmerica };
  const after = { hero: captainAmerica };

  expect(heroesReducer(initial, action)).toEqual(after);
});
