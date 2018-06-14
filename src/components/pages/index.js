import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, Post, Deal } from './routes';

export default () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/post" component={Post} />
    <Route path="/deal/:id" component={Deal} />
    <Route path="/deal" component={Deal} />
  </Switch>
);
