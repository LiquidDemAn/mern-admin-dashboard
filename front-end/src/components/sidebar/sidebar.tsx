import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { UserCard } from '../user-card';

import {
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

import {
	Box,
	Divider,
	IconButton,
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
	ListStyled,
	UserContainer,
	Settings,
	UserWrapper,
} from './sidebar.styled';

type Props = {
	isSidebarOpen: boolean;
	isNonMobile: boolean;
	menuToggle: () => void;
	handleClose: () => void;
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
	isNonMobile,
	menuToggle,
	handleClose,
}: Props) => {
	const { pathname } = useLocation();
	const { palette } = useTheme();
	const [active, setActive] = useState('');

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
								<IconButton onClick={menuToggle}>
									<ChevronLeft />
								</IconButton>
							)}
						</Header>
						<ListStyled>
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
						</ListStyled>

						<UserContainer>
							<Divider />
							<UserWrapper>
								<UserCard />
								<Settings iconColor={palette.secondaryCustom[300]} />
							</UserWrapper>
						</UserContainer>
					</DrawerInner>
				</DrawerStyled>
			)}
		</Box>
	);
};
