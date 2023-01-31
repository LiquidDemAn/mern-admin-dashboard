import {
	GridColDef,
	GridColumnMenuContainer,
	GridFilterMenuItem,
	HideGridColMenuItem,
} from '@mui/x-data-grid';
import React, { SyntheticEvent } from 'react';

type Props = {
	hideMenu: (event: SyntheticEvent) => void;
	currentColumn: GridColDef;
	open: boolean;
};

export const TableColumnMenu = ({ hideMenu, currentColumn, open }: Props) => {
	return (
		<GridColumnMenuContainer
			hideMenu={hideMenu}
			currentColumn={currentColumn}
			open={open}
		>
			<GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
			<HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
		</GridColumnMenuContainer>
	);
};
