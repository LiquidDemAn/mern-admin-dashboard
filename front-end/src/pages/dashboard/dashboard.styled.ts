import { TableContainer } from './../../global.styled';
import { Box, Button, Palette, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const MainContainer = styled(Box)({
	display: 'grid',
	gridTemplateColumns: 'repeat(12, 1fr)',
	gridAutoRows: 160,
	gap: 20,
	marginTop: 20,
});

export const DownloadButton = styled(Button)(
	({ palette }: { palette: Palette }) => ({
		backgroundColor: palette.secondary.light,
		color: palette.backgroundAlt.alt,
		fontSize: 14,
		fontWeight: 700,
		padding: '10px 20px',
		gap: 10,
	})
);

export const DashboardTableContainer = styled(TableContainer)({
	height: 'auto',
	marginTop: 0,
	gridColumn: 'span 8',
	gridRow: 'span 3',
});

export const BreakdownChartWrapper = styled(Box)({
	gridColumn: 'span 4',
	gridRow: 'span 3',
	padding: '1.5rem',
	borderRadius: '0.55rem',
});

export const BreakdownChartDescription = styled(Typography)({
	padding: '0 0.6rem',
	fontSize: '0.8rem',
});
