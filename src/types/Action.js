import type { Hero } from './Hero';

type FetchHeroesAction = {
  type: 'heroes:HEROES',
  payload: { heroes: [Hero] },
};

type GetHeroAction = {
  type: 'hero:HERO',
  payload: { hero: Hero },
};

export type Action = FetchHeroesAction | GetHeroAction;
