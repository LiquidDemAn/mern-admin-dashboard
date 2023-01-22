import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const UserImg = styled('img')({
	height: 40,
	width: 40,
	borderRadius: '50%',
	objectFit: 'cover',
	marginRight: '1rem',
});

export const UserName = styled(Typography)({
	fontWeight: 700,
	fontSize: '0.9rem',
	textAlign: 'left',
});

export const UserOccupation = styled(Typography)({
	fontSize: '0.8rem',
});
