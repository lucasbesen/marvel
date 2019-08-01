import axios from 'axios';

const root = '/characters';

const axiosCreate = axios.create({
  baseURL: process.env.REACT_APP_API_PATH,
});

const http = {
  get: ({ url, header }) =>
    axiosCreate({ method: 'get', url: `${url}apikey=${process.env.REACT_APP_API_KEY}`, header }).then(
      result => result.data.data,
    ),
};

export const getHero = id => http.get({ url: `${root}/${id}?` });

export const listHeroes = (limit = 10, offset = 0, term = '') => {
  const query = term
    ? `${root}?limit=${limit}&offset=${offset}&nameStartsWith=${term}&`
    : `${root}?limit=${limit}&offset=${offset}&`;
  return http.get({ url: query });
};
