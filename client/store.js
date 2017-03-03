import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { loadBunnies } from './actions/bunnyActions';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const defaultState = {
  bunnies: [],
  hobbies: []
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk), enhancers);

store.dispatch(loadBunnies());

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;