import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import matchesReducer from './match';

const reducers = combineReducers({
    matchesState: matchesReducer,
    routing: routerReducer
});

export default reducers;
