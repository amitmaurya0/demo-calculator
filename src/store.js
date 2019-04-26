import { applyMiddleware, createStore } from 'redux';
import { reducers } from './reducers';
import logger from 'redux-logger'
export function configureStore(initialState = {}) {
    const store = createStore(reducers,  applyMiddleware(logger));
    return store;
}

export const store = configureStore();