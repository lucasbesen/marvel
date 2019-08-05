import type { Hero } from './Hero';
import type { Pagination } from './Pagination';

export type State = {
  heroes?: [Hero],
  hero?: Hero,
  pagination?: Pagination,
};
