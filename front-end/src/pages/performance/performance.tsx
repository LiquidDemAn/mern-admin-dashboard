import { useTheme } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Header } from '../../components/header';
import { PageContainer, TableContainer } from '../../global.styled';
import { useGetUserPerformanceQuery } from '../../redux/state/api';
import { getUserId } from '../../redux/state/selectors';
import { TransactionType } from '../../redux/state/typedef';
import { useAppSelector } from '../../redux/store/hooks';

const columns: GridColDef<TransactionType>[] = [
	{ field: '_id', headerName: 'ID', flex: 1 },
	{ field: 'userId', headerName: 'User ID', flex: 1 },
	{ field: 'createdAt', headerName: 'CreatedAt', flex: 1 },
	{
		field: 'products',
		headerName: '# of Products',
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

export const PerformancePage = () => {
	const userId = useAppSelector(getUserId);

	const { palette } = useTheme();
	const { data, isLoading } = useGetUserPerformanceQuery(userId);

	return (
		<PageContainer>
			<Header
				title='Performance'
				subtitle='Track your Affiliate Sales Performance Here'
			/>
			<TableContainer palette={palette}>
				{data && (
					<DataGrid
						loading={isLoading || !data}
						getRowId={(row: TransactionType) => row._id}
						rows={data.sales}
						columns={columns}
					/>
				)}
			</TableContainer>
		</PageContainer>
	);
};
