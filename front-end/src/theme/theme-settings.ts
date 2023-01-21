import { ModeType } from './typedef';
import { tokensLight, tokensDark } from './tokens';

export const themeSettings = (mode: ModeType) => {
	return {
		palette: {
			mode: mode,
			...(mode === 'dark'
				? {
						// palette values for dark mode
						primary: {
							main: tokensDark.primary[400],
							light: tokensDark.primary[400],
						},
						primaryCustom: {
							...tokensDark.primary,
						},
						secondary: {
							main: tokensDark.secondary[300],
						},

						secondaryCustom: {
							...tokensDark.secondary,
						},

						neutral: {
							...tokensDark.grey,
							main: tokensDark.grey[500],
						},

						background: {
							default: tokensDark.primary[600],
							paper: tokensDark.primary[500],
						},
						backgroundAlt: {
							alt: tokensDark.primary[500],
						},
				  }
				: {
						// palette values for light mode
						primary: {
							main: tokensDark.grey[50],
							light: tokensDark.grey[100],
						},
						primaryCustom: {
							...tokensLight.primary,
						},
						secondary: {
							main: tokensDark.secondary[600],
							light: tokensDark.secondary[700],
						},
						secondaryCustom: {
							...tokensLight.secondary,
						},
						neutral: {
							...tokensLight.grey,
							main: tokensDark.grey[500],
						},
						background: {
							default: tokensDark.grey[0],
						},

						backgroundAlt: {
							alt: tokensDark.grey[50],
						},
				  }),
		},
		typography: {
			fontFamily: ['Inter', 'sans-serif'].join(','),
			fontSize: 12,
			h1: {
				fontFamily: ['Inter', 'sans-serif'].join(','),
				fontSize: 40,
			},
			h2: {
				fontFamily: ['Inter', 'sans-serif'].join(','),
				fontSize: 32,
			},
			h3: {
				fontFamily: ['Inter', 'sans-serif'].join(','),
				fontSize: 24,
			},
			h4: {
				fontFamily: ['Inter', 'sans-serif'].join(','),
				fontSize: 20,
			},
			h5: {
				fontFamily: ['Inter', 'sans-serif'].join(','),
				fontSize: 16,
			},
			h6: {
				fontFamily: ['Inter', 'sans-serif'].join(','),
				fontSize: 14,
			},
		},
	};
};
