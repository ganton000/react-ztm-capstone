import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';


//makeshift logger Middleware example
//const loggerMiddleware = (store) => (next) => (action) => {
//  if (!action.tye) { return next(action); }

//  console.log('type: ', action.type);
//  console.log('payload: ', action.payload);
//  console.log('currentState: ', store.getState());

//  //hits reducers and updates store
//  next(action);

//  console.log('next state: ', store.getState());
//};

//const middleWares = [loggerMiddleware];

//Logger catches action before it hits reducer
//and logs out the state
const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);
//Passes in all middleWars
//compose allows us to pass in multiple functions
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);