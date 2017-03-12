import React from "react";
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import App from './components/App';
import BunnyGrid from './components/BunnyGrid';
import SingleBunny from './components/SingleBunny';

export default (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={BunnyGrid}></IndexRoute>
        <Route path="bunnies/:id" component={SingleBunny}/>
      </Route>
    </Router>
  </Provider>
);