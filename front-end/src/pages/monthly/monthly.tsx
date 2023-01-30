import { useTheme } from '@mui/material';
import { ResponsiveLine, Serie } from '@nivo/line';
import { useMemo } from 'react';
import { Header } from '../../components/header';
import { ContentContainer, PageContainer } from '../../global.styled';
import { getLinesTheme } from '../../nivo/lines-theme';
import { useGetSalesQuery } from '../../redux/state/api';

export const MonthlyPage = () => {
	const { data } = useGetSalesQuery();
	const { palette } = useTheme();
	const linesTheme = getLinesTheme(palette);

	const formattedData = useMemo(() => {
		if (!data) {
			return [];
		}

		const { monthlyData } = data;

		const totalSalesLine: Serie = {
			id: 'totalSales',
			color: palette.secondary.main,
			data: [],
		};

		const totalUnitsLine: Serie = {
			id: 'totalUnits',
			color: palette.secondaryCustom[600],
			data: [],
		};

		monthlyData.forEach(({ month, totalSales, totalUnits }) => {
			totalSalesLine.data.push({ x: month, y: totalSales });
			totalUnitsLine.data.push({ x: month, y: totalUnits });
		});

		return [totalSalesLine, totalUnitsLine];
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	console.log(formattedData);

	return (
		<PageContainer>
			<Header title='Monthly sales' subtitle='Chart of monthly sales' />
			<ContentContainer>
				{data ? (
					<ResponsiveLine
						data={formattedData}
						theme={linesTheme}
						colors={{ datum: 'color' }}
						margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
						xScale={{ type: 'point' }}
						yScale={{
							type: 'linear',
							min: 'auto',
							max: 'auto',
							stacked: false,
							reverse: false,
						}}
						yFormat=' >-.2f'
						axisTop={null}
						axisRight={null}
						axisBottom={{
							tickSize: 5,
							tickPadding: 5,
							tickRotation: 0,
							legend: 'Month',
							legendOffset: 50,
							legendPosition: 'middle',
						}}
						axisLeft={{
							tickSize: 5,
							tickPadding: 5,
							tickRotation: 0,
							legend: 'Total',
							legendOffset: -50,
							legendPosition: 'middle',
						}}
						enableGridX={false}
						enableGridY={false}
						pointSize={10}
						pointColor={{ theme: 'background' }}
						pointBorderWidth={2}
						pointBorderColor={{ from: 'serieColor' }}
						pointLabelYOffset={-12}
						useMesh={true}
						legends={[
							{
								anchor: 'top-right',
								direction: 'column',
								justify: false,
								translateX: 30,
								translateY: -40,
								itemsSpacing: 0,
								itemDirection: 'left-to-right',
								itemWidth: 80,
								itemHeight: 20,
								itemOpacity: 0.75,
								symbolSize: 12,
								symbolShape: 'circle',
								symbolBorderColor: 'rgba(0, 0, 0, .5)',
								effects: [
									{
										on: 'hover',
										style: {
											itemBackground: 'rgba(0, 0, 0, .03)',
											itemOpacity: 1,
										},
									},
								],
							},
						]}
					/>
				) : (
					<>Loading...</>
				)}
			</ContentContainer>
		</PageContainer>
	);
};
