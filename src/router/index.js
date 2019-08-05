import * as React from 'react';
import { Route } from 'react-router';

import Home from '../containers/Home';
import Heroes from '../containers/Heroes';
import Hero from '../containers/Hero';

const Routes = (): React.ReactFragment => (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/heroes" component={Heroes} />
    <Route exact path="/hero/:id" component={Hero} />
  </>
);

export default Routes;
