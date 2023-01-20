declare module '@mui/material/styles' {
	interface Palette {
		backgroundAlt: { alt: string };
		neutral: typeof tokensDark.grey;
		primaryCustom: typeof tokensDark.primary;
		secondaryCustom: typeof tokensDark.secondary;
	}
}

// color design tokens export
export type ModeType = 'dark' | 'light';

export const tokensDark = {
	grey: {
		0: '#ffffff', // manually adjusted
		10: '#f6f6f6', // manually adjusted
		50: '#f0f0f0', // manually adjusted
		100: '#e0e0e0',
		200: '#c2c2c2',
		300: '#a3a3a3',
		400: '#858585',
		500: '#666666',
		600: '#525252',
		700: '#3d3d3d',
		800: '#292929',
		900: '#141414',
		1000: '#000000', // manually adjusted
	},
	primary: {
		// blue
		100: '#d3d4de',
		200: '#a6a9be',
		300: '#7a7f9d',
		400: '#4d547d',
		500: '#21295c',
		600: '#191F45', // manually adjusted
		700: '#141937',
		800: '#0d1025',
		900: '#070812',
	},
	secondary: {
		// yellow
		50: '#f0f0f0', // manually adjusted
		100: '#fff6e0',
		200: '#ffedc2',
		300: '#ffe3a3',
		400: '#ffda85',
		500: '#ffd166',
		600: '#cca752',
		700: '#997d3d',
		800: '#665429',
		900: '#332a14',
	},
};

// function that reverses the color palette
function reverseTokens(tokens: typeof tokensDark) {
	const reversedTokens = {} as any;

	Object.entries(tokens).forEach(([key, val]) => {
		const keys = Object.keys(val);
		const values = Object.values(val);
		const length = keys.length;
		const reversedObj = {} as any;

		for (let i = 0; i < length; i++) {
			reversedObj[keys[i]] = values[length - i - 1];
		}
		reversedTokens[key] = reversedObj;
	});
	return reversedTokens as typeof tokensDark;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
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
							alt: tokensDark.grey[50],
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
