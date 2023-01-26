import { useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridSortItem } from '@mui/x-data-grid';
import { useState } from 'react';
import { Header } from '../../components/header';
import { PageContainer, TableContainer } from '../../global.styled';
import { useGetTransactionsQuery } from '../../redux/state/api';
import { TransactionType } from '../../redux/state/typedef';

export const TransactionsPage = () => {
	const [page, setPage] = useState(0);
	const [pageSize, setPageSize] = useState(20);
	const [sort, setSort] = useState<GridSortItem | null>(null);
	const [search, setSearch] = useState('');

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
					page={page}
					pageSize={pageSize}
					paginationMode='server'
					sortingMode='server'
					onPageChange={(newPage) => setPage(newPage)}
					onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
					onSortModelChange={(newSortModel) => setSort(newSortModel[0])}
				/>
			</TableContainer>
		</PageContainer>
	);
};
