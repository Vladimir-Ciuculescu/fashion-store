import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
//Allow us to store the cart items in the browser
import {persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middelwares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middelwares))

export const persistor = persistStore(store);

export default {store, persistor};


