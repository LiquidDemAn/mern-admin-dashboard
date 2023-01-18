import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useMemo } from 'react';
import { getMode } from './redux/state/selectors';
import { useAppSelector } from './redux/store/hooks';
import { themeSettings } from './theme';

function App() {
	const mode = useAppSelector(getMode);
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return (
		<div className='app'>
			<ThemeProvider theme={theme}>
				<CssBaseline />
			</ThemeProvider>
		</div>
	);
}

export default App;
