import { Palette } from '@mui/material';

export const getLinesTheme = (palette: Palette) => {
	const theme = {
		axis: {
			domain: {
				line: {
					stroke: palette.secondaryCustom[200],
				},
			},
			legend: {
				text: {
					fill: palette.secondaryCustom[200],
				},
			},
			ticks: {
				line: {
					stroke: palette.secondaryCustom[200],
					strokeWidth: 1,
				},
				text: {
					fill: palette.secondaryCustom[200],
				},
			},
		},
		legends: {
			text: {
				fill: palette.secondaryCustom[200],
			},
		},
		tooltip: {
			container: {
				color: palette.secondaryCustom[600],
			},
		},
	};

	return theme;
};
