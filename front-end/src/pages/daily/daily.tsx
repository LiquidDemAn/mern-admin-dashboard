import DatePicker from 'react-datepicker';
import { useTheme, Box } from '@mui/material';
import { ResponsiveLine, Serie } from '@nivo/line';
import { useMemo, useState } from 'react';
import { Header } from '../../components/header';
import { ContentContainer, PageContainer } from '../../global.styled';
import { useGetSalesQuery } from '../../redux/state/api';
import 'react-datepicker/dist/react-datepicker.css';
import { getChartTheme } from '../../chart-theme';

export const DailyPage = () => {
	const [startDate, setStartDate] = useState(new Date('2021-02-01'));
	const [endDate, setEndDate] = useState(new Date('2021-03-01'));

	const { data } = useGetSalesQuery();
	const { palette } = useTheme();
	const chartTheme = getChartTheme(palette);

	const formattedData = useMemo(() => {
		if (!data) {
			return [];
		}

		const { dailyData } = data;

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

		dailyData.forEach(({ date, totalSales, totalUnits }) => {
			const dateFormatted = new Date(date);

			if (dateFormatted >= startDate && dateFormatted <= endDate) {
				const splitDate = date.substring(date.indexOf('-') + 1);

				totalSalesLine.data.push({ x: splitDate, y: totalSales });
				totalUnitsLine.data.push({ x: splitDate, y: totalUnits });
			}
		});

		return [totalSalesLine, totalUnitsLine];
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, startDate, endDate]);

	const onStartDateChange = (date: Date) => {
		setStartDate(date);
	};

	const onEndDateChange = (date: Date) => {
		setEndDate(date);
	};

	return (
		<PageContainer>
			<Header title='Daily sales' subtitle='Chart of daily sales' />
			<ContentContainer>
				<Box display='flex'>
					<Box>
						<DatePicker
							selected={startDate}
							onChange={onStartDateChange}
							selectsStart
							startDate={startDate}
							endDate={endDate}
						/>
					</Box>
					<Box>
						<DatePicker
							selected={endDate}
							onChange={onEndDateChange}
							selectsEnd
							startDate={startDate}
							endDate={endDate}
							minDate={startDate}
						/>
					</Box>
				</Box>
				{data ? (
					<ResponsiveLine
						data={formattedData}
						theme={chartTheme}
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
						curve='catmullRom'
						axisTop={null}
						axisRight={null}
						axisBottom={{
							tickSize: 5,
							tickPadding: 5,
							tickRotation: 90,
							legend: 'Day',
							legendOffset: 60,
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
