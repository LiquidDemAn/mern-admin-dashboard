import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled(Box)(() => ({
	display: 'block',
	width: '100%',
	height: '100%',

	'@media(min-width: 600px)': {
		display: 'flex',
	},
}));

export const MainWrapper = styled(Box)({
	flexGrow: 1,
});
