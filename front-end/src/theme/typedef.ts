import { tokensDark } from './tokens';

export type ModeType = 'dark' | 'light';
export type TokensType = typeof tokensDark;

type TokensGreyType = typeof tokensDark.grey;
type TokensPrimaryType = typeof tokensDark.primary;
type TokensSecondaryType = typeof tokensDark.secondary;

// Extends MUI theme palette colors

declare module '@mui/material/styles' {
	interface Palette {
		backgroundAlt: { alt: string };
		neutral: TokensGreyType;
		primaryCustom: TokensPrimaryType;
		secondaryCustom: TokensSecondaryType;
	}
}
