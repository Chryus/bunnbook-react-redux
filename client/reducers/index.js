import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import bunnies from './bunnies';
import hobbies from './hobbies';

const rootReducer = combineReducers({bunnies, hobbies, routing: routerReducer });

export default rootReducer;