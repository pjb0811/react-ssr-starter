import Loadable from 'react-loadable';

export const Main = Loadable({
  loader: () => import('./Main'),
  loading: () => null,
  modules: ['main']
});

export const Post = Loadable({
  loader: () => import('./Post'),
  loading: () => null,
  modules: ['post']
});

export const Deal = Loadable({
  loader: () => import('./Deal'),
  loading: () => null,
  modules: ['deal']
});
