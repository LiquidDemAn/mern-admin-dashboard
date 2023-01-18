import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import { FlexBetween } from '../../global.styled';
import {
	DarkModeOutlined,
	LightModeOutlined,
	SettingsOutlined,
} from '@mui/icons-material';

export const Container = styled(AppBar)({
	position: 'static',
	background: 'none',
	boxShadow: 'none',
});

export const Wrapper = styled(Toolbar)({
	justifyContent: 'space-between',
});

export const SearchWrapper = styled(FlexBetween)(
	({ backgroundColor }: { backgroundColor: string }) => ({
		padding: '0.1rem 1.5rem',
		gap: '3rem',
		borderRadius: '9px',
		backgroundColor,
	})
);

export const DarkModeIcon = styled(DarkModeOutlined)({
	fontSize: 25,
});

export const LightModeIcon = styled(LightModeOutlined)({
	fontSize: 25,
});

export const SettingsIcon = styled(SettingsOutlined)({
	fontSize: 25,
});
