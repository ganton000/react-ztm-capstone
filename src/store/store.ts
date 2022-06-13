import { compose, createStore, applyMiddleware, Middleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

//whitelist can only contain the keys of the RootState
type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[]
}

//Config object that tells redux persist what we want
const persistConfig: ExtendedPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] //values we don't want persisted
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);


//Logger catches action before it hits reducer
//and logs out the state
const middleWares = [
  process.env.NODE_ENV === 'development' && logger,
  sagaMiddleware
].filter(
  //predicate type middleware
  (middleware): middleware is Middleware => Boolean(middleware)
); //filters out falseys.

//If not in production and have window object,
//and the DEVTOOLS exist, then use this compose
//otherwise use compose from Redux.
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

//Passes in all middleWares
//compose allows us to pass in multiple functions
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

//After store is instantiated, must run sagaMiddleware
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);