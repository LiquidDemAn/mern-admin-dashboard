import { styled } from '@mui/system';
import {
	Box,
	Drawer,
	List,
	ListItemButton,
	Palette,
	Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { FlexBetween } from '../../global.styled';

type DrawerStyledProps = {
	color: string;
	backgroundColor: string;
};

type LinkProps = {
	palette: Palette;
	isActive: boolean;
};

export const DrawerStyled = styled(Drawer)(
	({ color, backgroundColor }: DrawerStyledProps) => ({
		width: 250,
		'& .MuiDrawer-paper': {
			boxSizing: 'border-box',
			borderWidth: 2,
			color,
			backgroundColor,
			width: 250,

			'@media(min-width: 600px)': {
				borderWidth: 0,
			},
		},
	})
);

export const DrawerInner = styled(Box)({
	width: '100%',
});

export const Header = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	gap: '0.5rem',
	margin: '1.5rem 2rem 2rem 3rem',
});

export const Logo = styled(Typography)({
	fontWeight: 700,
});

export const LinkStyled = styled(Link)({
	display: 'inherit',
	width: '100%',
	textDecoration: 'none',
});

export const ListStyled = styled(List)({
	height: '75vh',
	overflow: 'auto',
});

export const ListTitle = styled(Typography)({
	margin: '2.25rem 0 1rem 3rem',
});

export const LinkInner = styled(ListItemButton)(
	({ palette, isActive }: LinkProps) => ({
		paddingLeft: '3rem',
		color: isActive ? palette.primaryCustom[600] : palette.secondaryCustom[100],
		backgroundColor: isActive ? palette.secondaryCustom[300] : 'transparent',
		svg: {
			color: isActive
				? palette.primaryCustom[600]
				: palette.secondaryCustom[200],
		},
	})
);

export const UserContainer = styled(Box)({
	position: 'absolute',
	bottom: '1rem',
});

export const UserWrapper = styled(FlexBetween)({
	margin: '1rem 2rem 0 3rem',
	gap: '1rem',
});
