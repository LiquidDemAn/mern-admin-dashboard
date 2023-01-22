import { AppBar, Toolbar, Button } from '@mui/material';
import { styled } from '@mui/system';
import { FlexBetween } from '../../global.styled';

export const Container = styled(AppBar)({
	position: 'static',
	background: 'none',
	boxShadow: 'none',
});

export const Wrapper = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',

	svg: {
		fontSize: 25,
	},
});

export const SearchWrapper = styled(FlexBetween)(
	({ backgroundColor }: { backgroundColor: string }) => ({
		padding: '0.1rem 1rem',
		gap: '3rem',
		borderRadius: '9px',
		backgroundColor,
	})
);

export const RightBlock = styled(FlexBetween)({
	gap: '1.5rem',
});

export const UserButton = styled(Button)({
	textTransform: 'none',
});
