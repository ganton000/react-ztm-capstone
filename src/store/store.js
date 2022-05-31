import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

//Logger catches action before it hits reducer
//and logs out the state
const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);
//Passes in all middleWars
//compose allows us to pass in multiple functions
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);