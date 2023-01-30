import { useTheme } from '@mui/material';
import { ResponsiveLine, Serie } from '@nivo/line';
import { useMemo } from 'react';
import { getLinesTheme } from '../../nivo/lines-theme';
import { OverviewSelectEnum } from '../../pages/overview/overview';
import { useGetSalesQuery } from '../../redux/state/api';

type Props = {
	view: OverviewSelectEnum;
	isDashboard?: boolean;
};

export const OverviewChart = ({ view, isDashboard = false }: Props) => {
	const { data, isLoading } = useGetSalesQuery();

	const { palette } = useTheme();
	const linesTheme = getLinesTheme(palette);

	const [totalSalesLine, totalUnitsLine] = useMemo(() => {
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

		monthlyData.reduce(
			(acc, { month, totalSales, totalUnits }) => {
				const curSales = acc.sales + totalSales;
				const curUnits = acc.units + totalUnits;

				totalSalesLine.data.push({ x: month, y: curSales });
				totalUnitsLine.data.push({ x: month, y: curUnits });

				return { sales: curSales, units: curUnits };
			},
			{ sales: 0, units: 0 }
		);

		return [[totalSalesLine], [totalUnitsLine]];
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	if (!data || isLoading) return <>Loading</>;

	return (
		<>
			{totalSalesLine && totalUnitsLine && (
				<ResponsiveLine
					data={
						view === OverviewSelectEnum.Sales ? totalSalesLine : totalUnitsLine
					}
					theme={linesTheme}
					margin={{ top: 20, right: 50, bottom: 50, left: 70 }}
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
						format: (v) => {
							if (isDashboard) {
								return v.slice(0.3);
							}
							return v;
						},
						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: isDashboard ? '' : 'Month',
						legendOffset: 36,
						legendPosition: 'middle',
					}}
					axisLeft={{
						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: isDashboard
							? ''
							: `Total ${
									view === OverviewSelectEnum.Sales ? 'Revenue' : 'Units'
							  } for Year`,
						legendOffset: -60,
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
					legends={
						!isDashboard
							? [
									{
										anchor: 'bottom-right',
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
							  ]
							: undefined
					}
				/>
			)}
		</>
	);
};
