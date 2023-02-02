import { Box, Palette, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled(Box)(({ palette }: { palette: Palette }) => ({
	gridColumn: 'span 2',
	gridRow: 'span 1',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	padding: '1.25rem 1rem',
	flex: '1 1 100%',
	borderRadius: '0.55rem',
	backgroundColor: palette.backgroundAlt.alt,

	svg: {
		color: palette.secondaryCustom[300],
		fontSize: 26,
	},
}));

export const Value = styled(Typography)({
	fontWeight: 600,
});

export const Increase = styled(Typography)({
	fontStyle: 'italic',
});
