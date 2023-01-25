import { Box, styled } from '@mui/material';
import { BreakpointsEnum } from '../../typedef';

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
		gridColumn: 'span 16',

		[`@media(min-width: ${BreakpointsEnum.Sm}px)`]: {
			gridColumn: 'span 8',
		},

		[`@media(min-width: ${BreakpointsEnum.Lg}px)`]: {
			gridColumn: 'span 4',
		},
	},
});
