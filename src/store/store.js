import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from "./reducers/reducers";

const enchancer = applyMiddleware(thunk, logger);

const store = createStore(reducers, enchancer);

export default store;