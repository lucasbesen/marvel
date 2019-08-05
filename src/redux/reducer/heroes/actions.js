import { getHero as getHeroService, listHeroes as listHeroesService } from '../../../services';

export const HERO: string = 'hero:HERO';
export const HEROES: string = 'heroes:HEROES';
export const PAGINATION: string = 'heroes:PAGINATION';

export const fetchHeroes = (limit: string, offset: string, name: string): void => async dispatch => {
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

export const getHero = (id: string): void => async dispatch => {
  dispatch({ type: HEROES });
  const response = await getHeroService(id);
  dispatch({ type: HERO, payload: response.results[0] });
};
