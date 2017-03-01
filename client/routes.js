import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
// import Home from './components/Home';
// import Bunnies from '.components/Bunnies';
// import Bunny from '.components/Bunny';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
);