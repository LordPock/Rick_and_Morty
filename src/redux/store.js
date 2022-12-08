import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducerfav from './reducer';


const store = createStore(reducerfav, composeWithDevTools(applyMiddleware(thunk)));

export default store;
