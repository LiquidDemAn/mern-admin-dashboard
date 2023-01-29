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

export const ContentContainer = styled(Box)({
	height: '75vh',
	marginTop: 20,
});

export const TableContainer = styled(ContentContainer)(
	({ palette }: { palette: Palette }) => ({
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
		'& .MuiDataGrid-toolbarContainer .MuiButton-text': {
			color: palette.secondaryCustom[200],
		},
	})
);
