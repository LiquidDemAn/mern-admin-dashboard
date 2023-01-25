import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../navbar';
import { Sidebar } from '../sidebar';
import { Container, MainWrapper } from './layout.styled';

export const Layout = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const menuToggle = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const handleMenuClose = () => {
		setIsSidebarOpen(false);
	};

	return (
		<Container>
			{isSidebarOpen && (
				<Sidebar
					isSidebarOpen={isSidebarOpen}
					menuToggle={menuToggle}
					handleClose={handleMenuClose}
				/>
			)}

			<MainWrapper>
				<Navbar menuToggle={menuToggle} />
				<Outlet />
			</MainWrapper>
		</Container>
	);
};
