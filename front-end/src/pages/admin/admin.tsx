import { useTheme } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Header } from '../../components/header';
import { TableColumnMenu } from '../../components/table-column-menu';
import { PageContainer, TableContainer } from '../../global.styled';
import { useGetAdminsQuery } from '../../redux/state/api';
import { UserType } from '../../redux/state/typedef';

const columns: GridColDef<UserType>[] = [
	{ field: '_id', headerName: 'ID', flex: 1 },
	{ field: 'name', headerName: 'Name', flex: 0.5 },
	{ field: 'email', headerName: 'Email', flex: 1 },
	{
		field: 'phoneNumber',
		headerName: 'Phone Number',
		flex: 0.5,
		renderCell: (params) => {
			return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, '($1)$2-$3');
		},
	},
	{ field: 'country', headerName: 'Country', flex: 0.4 },
	{ field: 'occupation', headerName: 'Occupation', flex: 1 },
	{ field: 'role', headerName: 'Role', flex: 0.5 },
];

export const AdminPage = () => {
	const { palette } = useTheme();
	const { data, isLoading } = useGetAdminsQuery();

	return (
		<PageContainer>
			<Header title='Admins' subtitle='Managing admins and list of admins' />
			<TableContainer palette={palette}>
				{data && (
					<DataGrid
						loading={isLoading || !data}
						getRowId={(row: UserType) => row._id}
						rows={data}
						columns={columns}
						components={{
							ColumnMenu: TableColumnMenu,
						}}
					/>
				)}
			</TableContainer>
		</PageContainer>
	);
};
