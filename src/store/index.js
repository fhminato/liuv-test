import {createStore, combineReducers, applyMiddleware} from 'redux';
import repoReducer from './ducks/repo';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({repo: repoReducer});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
