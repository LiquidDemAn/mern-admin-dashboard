import {
	Search,
	ArrowDropDownOutlined,
	Menu as MenuIcon,
} from '@mui/icons-material';
import { AppBar, IconButton, InputBase, useTheme } from '@mui/material';
import profileImage from '../../assets/profile.jpeg';
import { FlexBetween } from '../../global.styled';
import { setMode } from '../../redux/state/globale-slice';
import { useAppDispatch } from '../../redux/store/hooks';
import {
	Container,
	SearchWrapper,
	Wrapper,
	LightModeIcon,
	DarkModeIcon,
	SettingsIcon,
} from './navbar.styled';

type Props = {
	isSidebarOpen: boolean;
	setIsSidebarOpen: (value: boolean) => void;
};

export const Navbar = ({ isSidebarOpen, setIsSidebarOpen }: Props) => {
	const dispatch = useAppDispatch();
	const theme = useTheme();

	const menuToggle = () => {
		setIsSidebarOpen(!isSidebarOpen);
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

					<SearchWrapper backgroundColor={theme.palette.backgroundAlt.alt}>
						<InputBase placeholder='Search...' />
						<IconButton>
							<Search />
						</IconButton>
					</SearchWrapper>
				</FlexBetween>

				{/* RIGHT SIDE */}
				<FlexBetween gap='1.5rem'>
					<IconButton onClick={toggleMode}>
						{theme.palette.mode === 'dark' ? (
							<DarkModeIcon />
						) : (
							<LightModeIcon />
						)}
					</IconButton>

					<IconButton>
						<SettingsIcon />
					</IconButton>
				</FlexBetween>
			</Wrapper>
		</Container>
	);
};
