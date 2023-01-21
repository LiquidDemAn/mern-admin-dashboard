import { Box, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useGetUserQuery } from '../../redux/state/api';
import { getUserId } from '../../redux/state/selectors';
import { useAppSelector } from '../../redux/store/hooks';
import { Navbar } from '../navbar';
import { Sidebar } from '../sidebar';
import { Container } from './layout.styled';

export const Layout = () => {
	const isNonMobile = useMediaQuery('(min-width: 600px)');
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const userId = useAppSelector(getUserId);

	const { data } = useGetUserQuery(userId);

	return (
		<Container>
			{isSidebarOpen && (
				<Sidebar
					user={data}
					isSidebarOpen={isSidebarOpen}
					setIsSidebarOpen={setIsSidebarOpen}
					isNonMobile={isNonMobile}
				/>
			)}

			<Box>
				<Navbar
					isSidebarOpen={isSidebarOpen}
					setIsSidebarOpen={setIsSidebarOpen}
				/>
				<Outlet />
			</Box>
		</Container>
	);
};
