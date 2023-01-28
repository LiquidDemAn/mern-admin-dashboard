import { useTheme } from '@mui/material';
import {
	DataGrid,
	GridColDef,
	GridSortItem,
	GridSortModel,
} from '@mui/x-data-grid';
import { useRef, useState } from 'react';
import { Header } from '../../components/header';
import { TableToolbar } from '../../components/table-toolbar';
import { PageContainer, TableContainer } from '../../global.styled';
import { useGetTransactionsQuery } from '../../redux/state/api';
import { TransactionType } from '../../redux/state/typedef';

const rowsPerPage = [20, 50, 100];

export const TransactionsPage = () => {
	const [page, setPage] = useState(0);
	const [pageSize, setPageSize] = useState(rowsPerPage[0]);
	const [sort, setSort] = useState<GridSortItem | null>(null);
	const [search, setSearch] = useState('');

	const searchRef = useRef<HTMLInputElement | null>(null);

	const onSearch = () => {
		const value = searchRef.current?.value;

		if (value) {
			setSearch(value);
		}
	};

	const onPageChange = (newPage: number) => {
		setPage(newPage);
	};

	const onPageSizeChange = (newPageSize: number) => {
		setPageSize(newPageSize);
	};

	const onSortModelChange = (newSortModel: GridSortModel) => {
		setSort(newSortModel[0]);
	};

	const { palette } = useTheme();
	const { data, isLoading } = useGetTransactionsQuery({
		page,
		pageSize,
		search,
		sort: sort ? JSON.stringify(sort) : null,
	});

	const columns: GridColDef[] = [
		{ field: '_id', headerName: 'ID', flex: 1 },
		{ field: 'userId', headerName: 'User ID', flex: 1 },
		{ field: 'createdAt', headerName: 'CreatedAt', flex: 1 },
		{
			field: 'products',
			headerName: 'Products',
			flex: 0.5,
			sortable: false,
			renderCell: (params) => params.value.length,
		},
		{
			field: 'cost',
			headerName: 'Cost',
			flex: 1,
			renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
		},
	];

	return (
		<PageContainer>
			<Header title='Transactions' subtitle='Entire list of transactions' />
			<TableContainer palette={palette}>
				<DataGrid
					loading={isLoading}
					rows={data?.transactions || []}
					getRowId={(row: TransactionType) => row._id}
					columns={columns}
					pagination
					rowCount={data?.total}
					rowsPerPageOptions={rowsPerPage}
					page={page}
					pageSize={pageSize}
					paginationMode='server'
					sortingMode='server'
					onPageChange={onPageChange}
					onPageSizeChange={onPageSizeChange}
					onSortModelChange={onSortModelChange}
					components={{ Toolbar: TableToolbar }}
					componentsProps={{
						toolbar: { searchRef, onSearch },
					}}
				/>
			</TableContainer>
		</PageContainer>
	);
};
