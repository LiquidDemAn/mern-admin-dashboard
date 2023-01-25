import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useMemo } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import { DashboardPage } from './pages/dashboard';
import { ProductsPage } from './pages/products';
import { getMode } from './redux/state/selectors';
import { useAppSelector } from './redux/store/hooks';
import { themeSettings } from './theme/theme-settings';


function App() {
	const mode = useAppSelector(getMode);
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return (
		<div className='app'>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Routes>
						<Route element={<Layout />}>
							<Route path='/' element={<Navigate to='/dashboard' replace />} />
							<Route path='/dashboard' element={<DashboardPage />} />
							<Route path='/products' element={<ProductsPage />} />
						</Route>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
