import { Card, Typography, styled } from '@mui/material';

export const Container = styled(Card)(
	({ backgroundColor }: { backgroundColor: string }) => ({
		backgroundImage: 'none',
		borderRadius: '0.55rem',
		backgroundColor,
	})
);

export const Category = styled(Typography)({
	fontSize: 14,
});

export const Price = styled(Typography)({
	marginBottom: '1.5rem',
});
