import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useMemo } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import { CustomersPage } from './pages/customers';
import { DashboardPage } from './pages/dashboard';
import { GeographyPage } from './pages/geography';
import { ProductsPage } from './pages/products';
import { OverviewPage } from './pages/overview';
import { TransactionsPage } from './pages/transactions';
import { getMode } from './redux/state/selectors';
import { useAppSelector } from './redux/store/hooks';
import { themeSettings } from './theme/theme-settings';
import { DailyPage } from './pages/daily';
import { MonthlyPage } from './pages/monthly';
import { BreakdownPage } from './pages/breakdown';
import { AdminPage } from './pages/admin';
import { PerformancePage } from './pages/performance';

function App() {
	const mode = useAppSelector(getMode);
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return (
		<div className='app'>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Routes>
					<Route element={<Layout />}>
						<Route path='/' element={<Navigate to='/dashboard' replace />} />
						<Route path='/dashboard' element={<DashboardPage />} />
						<Route path='/products' element={<ProductsPage />} />
						<Route path='/customers' element={<CustomersPage />} />
						<Route path='/transactions' element={<TransactionsPage />} />
						<Route path='/geography' element={<GeographyPage />} />
						<Route path='/overview' element={<OverviewPage />} />
						<Route path='/daily' element={<DailyPage />} />
						<Route path='/monthly' element={<MonthlyPage />} />
						<Route path='/breakdown' element={<BreakdownPage />} />
						<Route path='/admin' element={<AdminPage />} />
						<Route path='/performance' element={<PerformancePage />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</div>
	);
}

export default App;
