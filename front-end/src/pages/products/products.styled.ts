import { Box, styled } from '@mui/material';

export const Container = styled(Box)({
	margin: '1.5rem 2.5rem',
});

export const Products = styled(Box)({
	display: 'grid',
	gridTemplateColumns: 'repeat(16, minmax(0, 1fr))',
	justifyContent: 'space-between',
	rowGap: 20,
	columnGap: '1.33%',
	marginTop: 20,

	'& > div': {
		gridColumn: 'none',

		'@media(min-width: 1000px)': {
			gridColumn: 'span 4',
		},
	},
});
