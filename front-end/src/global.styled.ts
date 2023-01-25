import { Box, Palette } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FlexBetween = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
});

export const PageContainer = styled(Box)({
	margin: '1.5rem 2.5rem',
});

export const TableContainer = styled(Box)(
	({ palette }: { palette: Palette }) => ({
		height: '75vh',
		marginTop: 40,

		'& .MuiDataGrid-root': {
			border: 'none',
		},
		'& .MuiDataGrid-columnHeaders': {
			backgroundColor: palette.backgroundAlt.alt,
			color: palette.secondaryCustom[100],
			borderBottom: 'none',
		},
		'& .MuiDataGrid-virtualScroller': {
			backgroundColor: palette.primary.light,
		},
		'& .MuiDataGrid-footerContainer': {
			backgroundColor: palette.backgroundAlt.alt,
			color: palette.secondaryCustom[100],
			borderTop: 'none',
		},
	})
);
