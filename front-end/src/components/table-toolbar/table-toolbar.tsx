import { Search } from '@mui/icons-material';
import {
	GridToolbarColumnsButton,
	GridToolbarContainer,
	GridToolbarDensitySelector,
	GridToolbarExport,
} from '@mui/x-data-grid';
import { FlexBetween } from '../../global.styled';
import { IconButton, InputAdornment } from '@mui/material';
import { MutableRefObject } from 'react';
import { SearchTextField } from './table-toolbar.styled';

type Props = {
	searchRef: MutableRefObject<null>;
	onSearch: () => void;
};

export const TableToolbar = ({ searchRef, onSearch }: Props) => {
	return (
		<GridToolbarContainer>
			<FlexBetween width='100%'>
				<FlexBetween>
					<GridToolbarColumnsButton />
					<GridToolbarDensitySelector />
					<GridToolbarExport />
				</FlexBetween>
				<SearchTextField
					label='Search...'
					variant='standard'
					inputRef={searchRef}
					InputProps={{
						endAdornment: (
							<InputAdornment position='end'>
								<IconButton onClick={onSearch}>
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
