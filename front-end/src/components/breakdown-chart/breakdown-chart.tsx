import { Typography, useTheme } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';
import { getChartTheme } from '../../chart-theme';
import { useGetSalesQuery } from '../../redux/state/api';
import { Container, TextContainer } from './breakdown-chart.styled';

type Props = {
	isDashboard?: boolean;
};

export const BreakdownChart = ({ isDashboard = false }: Props) => {
	const { data, isLoading } = useGetSalesQuery();
	const { palette } = useTheme();
	const chartTheme = getChartTheme(palette);

	const colors = [
		palette.secondaryCustom[500],
		palette.secondaryCustom[300],
		palette.secondaryCustom[300],
		palette.secondaryCustom[500],
	];

	const formattedData = data
		? Object.entries(data.salesByCategory).map(([category, sales], index) => ({
				id: category,
				label: category,
				value: sales,
				color: colors[index],
		  }))
		: [];

	if (!data || isLoading) {
		return <>Loading...</>;
	}

	return (
		<Container isDashboard={isDashboard}>
			<ResponsivePie
				data={formattedData}
				theme={chartTheme}
				colors={{ datum: 'data.color' }}
				margin={
					isDashboard
						? { top: 40, right: 80, bottom: 100, left: 50 }
						: { top: 40, right: 80, bottom: 80, left: 80 }
				}
				sortByValue={true}
				innerRadius={0.45}
				padAngle={0.5}
				activeOuterRadiusOffset={8}
				borderWidth={1}
				borderColor={{
					from: 'color',
					modifiers: [['darker', 0.2]],
				}}
				enableArcLinkLabels={!isDashboard}
				arcLinkLabelsTextColor={palette.secondaryCustom[200]}
				arcLinkLabelsThickness={2}
				arcLinkLabelsColor={{ from: 'color' }}
				arcLabelsSkipAngle={10}
				arcLabelsTextColor={{
					from: 'color',
					modifiers: [['darker', 2]],
				}}
				legends={[
					{
						anchor: 'bottom',
						direction: 'row',
						justify: false,
						translateX: isDashboard ? 20 : 0,
						translateY: isDashboard ? 50 : 56,
						itemsSpacing: 0,
						itemWidth: 100,
						itemHeight: 18,
						itemTextColor: '#999',
						itemDirection: 'left-to-right',
						itemOpacity: 1,
						symbolSize: 18,
						symbolShape: 'circle',
						effects: [
							{
								on: 'hover',
								style: {
									itemTextColor: palette.primaryCustom[500],
								},
							},
						],
					},
				]}
			/>
			<TextContainer
				isDashboard={isDashboard}
				color={palette.secondaryCustom[400]}
			>
				<Typography variant='h6'>
					{!isDashboard && 'Total:'} ${data.yearlySalesTotal}
				</Typography>
			</TextContainer>
		</Container>
	);
};
