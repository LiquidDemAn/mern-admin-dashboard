import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { api } from '../state/api';
import { globalSlice } from '../state/globale-slice';

const rootReducer = combineReducers({
	global: globalSlice.reducer,
	[api.reducerPath]: api.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefault) => getDefault().concat(api.middleware),
	devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);
