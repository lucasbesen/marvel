import axios from 'axios';

type GetParameters = {
  url: string,
  header: '',
};

type HTTP = {
  get: (getParameters: GetParameters) => Promise,
};

const root: string = '/characters';

const axiosCreate = axios.create({
  baseURL: process.env.REACT_APP_API_PATH,
});

const http: HTTP = {
  get: ({ url, header }) =>
    axiosCreate({ method: 'get', url: `${url}apikey=${process.env.REACT_APP_API_KEY}`, header }).then(
      result => result.data.data,
    ),
};

export const getHero = (id: string) => http.get({ url: `${root}/${id}?` });

export const listHeroes = (limit: number = 10, offset: number = 0, name: string = '') => {
  const query = name
    ? `${root}?limit=${limit}&offset=${offset}&nameStartsWith=${name}&`
    : `${root}?limit=${limit}&offset=${offset}&`;
  return http.get({ url: query });
};
