import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Post = Loadable({
  loader: () => import(/* webpackChunkName: "Post" */ './Post'),
  loading: () => null,
  modules: ['post']
});

export default () => (
  <Switch>
    <Route exact path="/post" component={Post} />
  </Switch>
);
