import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { rootReducer } from './root-reducer';

//Config object that tells redux persist what we want
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] //values we don't want persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


//Logger catches action before it hits reducer
//and logs out the state
const middleWares = [process.env.NODE_ENV === 'development' && logger,
thunk].filter(
  Boolean
); //filters out falseys.

//If not in production and have window object,
//and the DEVTOOLS exist, then use this compose
//otherwise use compose from Redux.
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

//Passes in all middleWares
//compose allows us to pass in multiple functions
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);