import { createSlice } from '@reduxjs/toolkit';
import { ModeType } from '../../theme';

type StateType = {
	mode: ModeType;
};

const initialState: StateType = {
	mode: 'dark',
};

export const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		setMode(state) {
			state.mode = state.mode === 'light' ? 'dark' : 'light';
		},
	},
});

export const { setMode } = globalSlice.actions;
