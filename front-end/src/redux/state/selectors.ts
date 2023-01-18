import { AppState } from '../store/typedef';

export const getMode = (state: AppState) => state.global.mode;
