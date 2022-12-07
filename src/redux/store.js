import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import favorites from './reducer';

const store = createStore(favorites, applyMiddleware(thunk));

export default store;
