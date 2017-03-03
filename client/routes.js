import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import App from './components/App';
// import Home from './components/Home';
import Bunnies from './components/Bunnies';
// import Bunny from '.components/Bunny';

export default (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
        <IndexRoute component={Bunnies} />
    </Router>
  </Provider>
);