import { Header } from '../../components/header';
import { FlexBetween, PageContainer } from '../../global.styled';
import { useGetDashboardStatQuery } from '../../redux/state/api';
import { Typography, useMediaQuery, useTheme } from '@mui/material';

import {
	DownloadOutlined,
	Email,
	PointOfSale,
	PersonAdd,
	Traffic,
} from '@mui/icons-material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import { BreakpointsEnum } from '../../typedef';
import { StatBox } from '../../components/stat-box';
import { OverviewChart } from '../../components/overview-chart';
import { OverviewSelectEnum } from '../overview/overview';
import {
	BreakdownChartDescription,
	BreakdownChartWrapper,
	DashboardTableContainer,
	DownloadButton,
	MainContainer,
} from './dashboard.styled';
import { TransactionType } from '../../redux/state/typedef';
import { BreakdownChart } from '../../components/breakdown-chart';

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

export const DashboardPage = () => {
	const { data, isLoading } = useGetDashboardStatQuery();

	const isNonMediumScreens = useMediaQuery(
		`(min-width:${BreakpointsEnum.XL}px )`
	);

	const isNonMobile = useMediaQuery(`(min-width:${BreakpointsEnum.Sm}px )`);

	const { palette } = useTheme();

	return (
		<PageContainer>
			<FlexBetween>
				<Header title='Dashboard' subtitle='Welcome to your dashboard' />

				<DownloadButton palette={palette}>
					<DownloadOutlined />
					{isNonMobile && 'Download Reports'}
				</DownloadButton>
			</FlexBetween>

			<MainContainer
				sx={{
					'& > div': { gridColumn: isNonMediumScreens ? undefined : 'span 12' },
				}}
			>
				<StatBox
					title='Total Customers'
					value={data?.totalCustomers}
					increase='+14%'
					description='Since last month'
					icon={<Email />}
				/>

				<StatBox
					title='Sales Today'
					value={data?.thisDayStats.totalSales}
					increase='+21%'
					description='Since last month'
					icon={<PointOfSale />}
				/>

				<Box
					gridColumn='span 8'
					gridRow='span 2'
					bgcolor={palette.backgroundAlt.alt}
					p='1rem'
					borderRadius='0.55rem'
				>
					<OverviewChart view={OverviewSelectEnum.Sales} isDashboard />
				</Box>

				<StatBox
					title='Monthly Sales'
					value={data?.thisMonthStats.totalSales}
					increase='+5%'
					description='Since last month'
					icon={<PersonAdd />}
				/>

				<StatBox
					title='Yearly Sales'
					value={data?.yearlySalesTotal}
					increase='+43%'
					description='Since last month'
					icon={<Traffic />}
				/>

				{/* Row 2 */}
				<DashboardTableContainer palette={palette}>
					<DataGrid
						loading={isLoading}
						rows={data?.transactions || []}
						getRowId={(row: TransactionType) => row._id}
						columns={columns}
					/>
				</DashboardTableContainer>

				<BreakdownChartWrapper bgcolor={palette.backgroundAlt.alt}>
					<Typography variant='h6' color={palette.secondaryCustom[100]}>
						Sales By Category
					</Typography>
					<BreakdownChart isDashboard />
					<BreakdownChartDescription color={palette.secondaryCustom[200]}>
						Breakdown of real states and information via category for revenue
						made for this year adn total sales
					</BreakdownChartDescription>
				</BreakdownChartWrapper>
			</MainContainer>
		</PageContainer>
	);
};
