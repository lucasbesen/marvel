import { getHero as getHeroService, listHeroes as listHeroesService } from '../../../services';

export const HERO = 'hero:HERO';
export const HEROES = 'heroes:HEROES';
export const PAGINATION = 'heroes:PAGINATION';

export const fetchHeroes = (limit, offset, name) => async dispatch => {
  const response = await listHeroesService(limit, offset, name);
  dispatch({ type: HEROES, payload: response.results });
  dispatch({
    type: PAGINATION,
    payload: {
      count: response.count,
      limit: response.limit,
      offset: response.offset,
      total: response.total,
    },
  });
};

export const getHero = id => async dispatch => {
  dispatch({ type: HEROES });
  const response = await getHeroService(id);
  dispatch({ type: HERO, payload: response.results[0] });
};
