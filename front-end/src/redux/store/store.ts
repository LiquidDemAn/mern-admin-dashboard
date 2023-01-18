import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { globalSlice } from '../state/globale-slice';
import { AppDispatch } from './typedef';

const rootReducer = combineReducers({
	global: globalSlice.reducer,
});

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
});
