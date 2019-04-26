import { combineReducers } from 'redux';

import { numberReducer } from './number-reducer';

export const reducers = combineReducers({
  expression: numberReducer,
});