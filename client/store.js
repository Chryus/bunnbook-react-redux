import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { loadBunnies } from './actions/bunnyActions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const defaultState = {
  bunnies: { data: []},
  hobbies: { data: []}
};

const store = createStore(rootReducer, defaultState, composeEnhancers(
  applyMiddleware(thunk)
));

store.dispatch(loadBunnies());

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;