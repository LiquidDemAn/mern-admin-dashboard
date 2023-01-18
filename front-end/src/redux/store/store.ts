import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { globalSlice } from '../state/globale-slice';

const rootReducer = combineReducers({
	global: globalSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
});
