import {
	Search,
	ArrowDropDownOutlined,
	Menu as MenuIcon,
} from '@mui/icons-material';
import { IconButton, InputBase, Menu, MenuItem, useTheme } from '@mui/material';
import { useState } from 'react';
import { FlexBetween } from '../../global.styled';
import { setMode } from '../../redux/state/globale-slice';
import { useAppDispatch } from '../../redux/store/hooks';
import { UserCard } from '../user-card';
import {
	Container,
	SearchWrapper,
	Wrapper,
	LightModeIcon,
	DarkModeIcon,
	SettingsIcon,
	UserButton,
	RightBlock,
} from './navbar.styled';

type Props = {
	menuToggle: () => void;
};

export const Navbar = ({ menuToggle }: Props) => {
	const dispatch = useAppDispatch();
	const { palette } = useTheme();

	const [anchorEl, setAnchorEl] = useState(null);
	const isOpen = Boolean(anchorEl);

	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const toggleMode = () => {
		dispatch(setMode());
	};

	return (
		<Container>
			<Wrapper>
				{/* LEFT SIDE */}
				<FlexBetween>
					<IconButton onClick={menuToggle}>
						<MenuIcon />
					</IconButton>

					<SearchWrapper backgroundColor={palette.backgroundAlt.alt}>
						<InputBase placeholder='Search...' />
						<IconButton>
							<Search />
						</IconButton>
					</SearchWrapper>
				</FlexBetween>

				{/* RIGHT SIDE */}
				<RightBlock>
					<IconButton onClick={toggleMode}>
						{palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
					</IconButton>

					<IconButton>
						<SettingsIcon />
					</IconButton>

					<FlexBetween>
						<UserButton onClick={handleClick}>
							<UserCard />
							<ArrowDropDownOutlined
								sx={{ color: palette.secondaryCustom[300], fontSize: '25px' }}
							/>
						</UserButton>
						<Menu
							anchorEl={anchorEl}
							open={isOpen}
							onClose={handleClose}
							anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
						>
							<MenuItem onClick={handleClose}>Log out</MenuItem>
						</Menu>
					</FlexBetween>
				</RightBlock>
			</Wrapper>
		</Container>
	);
};
