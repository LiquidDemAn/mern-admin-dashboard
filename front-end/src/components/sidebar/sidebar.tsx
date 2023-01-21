import { useEffect, useState } from 'react';
import {
	// SettingsOutlined,
	// ChevronLeftOutlined,
	ChevronRightOutlined,
	HomeOutlined,
	ShoppingCartOutlined,
	Groups2Outlined,
	ReceiptLongOutlined,
	PublicOutlined,
	PointOfSaleOutlined,
	TodayOutlined,
	CalendarMonthOutlined,
	AdminPanelSettingsOutlined,
	TrendingUpOutlined,
	PieChartOutlined,
	ChevronLeft,
} from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import {
	Box,
	IconButton,
	List,
	ListItem,
	ListItemText,
	useTheme,
} from '@mui/material';
import {
	DrawerInner,
	DrawerStyled,
	Header,
	Logo,
	LinkStyled,
	ListTitle,
	LinkInner,
	LinkIcon,
} from './sidebar.styled';
import { UserType } from '../../redux/state/typedef';

type Props = {
	user?: UserType;
	isSidebarOpen: boolean;
	isNonMobile: boolean;
	setIsSidebarOpen: (value: boolean) => void;
};

const navItems = [
	{
		text: 'Dashboard',
		to: 'dashboard',
		icon: <HomeOutlined />,
	},
	{
		text: 'Client Facing',
		icon: null,
	},
	{
		text: 'Products',
		to: 'products',
		icon: <ShoppingCartOutlined />,
	},
	{
		text: 'Customers',
		to: 'customers',
		icon: <Groups2Outlined />,
	},
	{
		text: 'Transactions',
		to: 'transactions',
		icon: <ReceiptLongOutlined />,
	},
	{
		text: 'Geography',
		to: 'geography',
		icon: <PublicOutlined />,
	},
	{
		text: 'Sales',
		icon: null,
	},
	{
		text: 'Overview',
		to: 'overview',
		icon: <PointOfSaleOutlined />,
	},
	{
		text: 'Daily',
		to: 'daily',
		icon: <TodayOutlined />,
	},
	{
		text: 'Monthly',
		to: 'monthly',
		icon: <CalendarMonthOutlined />,
	},
	{
		text: 'Breakdown',
		to: 'breakdown',
		icon: <PieChartOutlined />,
	},
	{
		text: 'Management',
		icon: null,
	},
	{
		text: 'Admin',
		to: 'admin',
		icon: <AdminPanelSettingsOutlined />,
	},
	{
		text: 'Performance',
		to: 'performance',
		icon: <TrendingUpOutlined />,
	},
];

export const Sidebar = ({
	isSidebarOpen,
	setIsSidebarOpen,
	isNonMobile,
	user,
}: Props) => {
	const { pathname } = useLocation();
	const { palette } = useTheme();
	const [active, setActive] = useState('');

	const handleClose = () => {
		setIsSidebarOpen(false);
	};

	const sidebarToggle = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	useEffect(() => {
		setActive(pathname.substring(1));
	}, [pathname]);

	return (
		<Box component='nav'>
			{isSidebarOpen && (
				<DrawerStyled
					open={isSidebarOpen}
					anchor='left'
					variant='persistent'
					onClose={handleClose}
					color={palette.secondaryCustom[400]}
					backgroundColor={palette.backgroundAlt.alt}
				>
					<DrawerInner>
						<Header color={palette.secondary.main}>
							<Logo variant='h4'>ECOMVISION</Logo>
							{!isNonMobile && (
								<IconButton onClick={sidebarToggle}>
									<ChevronLeft />
								</IconButton>
							)}
						</Header>
						<List>
							{navItems.map(({ text, icon, to }) =>
								to ? (
									<ListItem key={text} disablePadding>
										<LinkStyled to={to}>
											<LinkInner palette={palette} isActive={active === to}>
												<LinkIcon palette={palette} isActive={active === to}>
													{icon}
												</LinkIcon>
												<ListItemText primary={text} />

												{active === to && <ChevronRightOutlined />}
											</LinkInner>
										</LinkStyled>
									</ListItem>
								) : (
									<ListTitle key={text}>{text}</ListTitle>
								)
							)}
						</List>
					</DrawerInner>
				</DrawerStyled>
			)}
		</Box>
	);
};
