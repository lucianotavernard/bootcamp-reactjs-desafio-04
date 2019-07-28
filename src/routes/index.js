import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Browse from '../pages/Browse';
import Playlist from '../pages/Playlist';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
    <Route path="/playlists/:id" component={Playlist} />
  </Switch>
);

export default Routes;
