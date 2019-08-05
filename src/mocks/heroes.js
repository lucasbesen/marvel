import type { Hero } from '../types/Hero';

export const heroMock: Hero = {
  id: 1,
  name: 'Captain America',
  thumbnail: {
    path: 'www.google.com',
  },
  series: {
    items: [
      {
        name: 'TV Show 1',
      },
      {
        name: 'TV Show 2',
      },
    ],
  },
};
