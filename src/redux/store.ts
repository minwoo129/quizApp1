import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './slice';
import logger from 'redux-logger';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({immutableCheck: false}).concat(logger),
});

export type AppDispatch = typeof store.dispatch;

export default store;
