import { Search } from '@mui/icons-material';
import {
	GridToolbarColumnsButton,
	GridToolbarContainer,
	GridToolbarDensitySelector,
	GridToolbarExport,
} from '@mui/x-data-grid';
import { FlexBetween } from '../../global.styled';
import { IconButton, InputAdornment, TextField } from '@mui/material';

export const TableToolbar = () => {
	return (
		<GridToolbarContainer>
			<FlexBetween width='100%'>
				<FlexBetween>
					<GridToolbarColumnsButton />
					<GridToolbarDensitySelector />
					<GridToolbarExport />
				</FlexBetween>
				<TextField
					label='Search...'
					sx={{ mb: '0.5rem', width: '15rem' }}
					// value={searchValue}
					InputProps={{
						endAdornment: (
							<InputAdornment position='end'>
								<IconButton onClick={() => {}}>
									<Search />
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			</FlexBetween>
		</GridToolbarContainer>
	);
};
