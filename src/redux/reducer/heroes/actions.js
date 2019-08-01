import { push } from 'connected-react-router';
import { getHero as getHeroService, listHeroes as listHeroesService } from '../../../services';

export const HERO = 'hero:HERO';
export const HEROES = 'heroes:HEROES';
export const PAGINATION = 'heroes:PAGINATION';

export const fetchHeroes = (limit, offset, term) => async dispatch => {
  const response = await listHeroesService(limit, offset, term);
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
  dispatch(push('/heroes'));
};

export const getHero = id => async dispatch => {
  dispatch({ type: HEROES });
  const response = await getHeroService(id);
  dispatch({ type: HERO, payload: response.results[0] });
  dispatch(push(`/hero/${id}`));
  dispatch({ type: HEROES });
};
