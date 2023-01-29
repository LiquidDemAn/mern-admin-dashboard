import { useTheme } from '@mui/material';
import { ResponsiveChoropleth } from '@nivo/geo';
import { Header } from '../../components/header';
import { ContentContainer, PageContainer } from '../../global.styled';
import { useGetGeographyQuery } from '../../redux/state/api';
import { geographyData } from '../../redux/state/geography-data';
import { GeographyContainer } from './geography.styled';

export const GeographyPage = () => {
	const { palette } = useTheme();
	const { data } = useGetGeographyQuery();

	return (
		<PageContainer>
			<Header title='Geography' subtitle='Find where your users are located' />

			{data ? (
				<GeographyContainer
					borderColor={palette.secondaryCustom[200]}
					borderRadius='4px'
				>
					<ResponsiveChoropleth
						data={data}
						theme={{
							axis: {
								domain: {
									line: {
										stroke: palette.secondaryCustom[200],
									},
								},
								legend: {
									text: {
										fill: palette.secondaryCustom[200],
									},
								},
								ticks: {
									line: {
										stroke: palette.secondaryCustom[200],
										strokeWidth: 1,
									},
									text: {
										fill: palette.secondaryCustom[200],
									},
								},
							},
							legends: {
								text: {
									fill: palette.secondaryCustom[200],
								},
							},
							tooltip: {
								container: {
									color: palette.secondaryCustom[600],
								},
							},
						}}
						features={geographyData.features}
						margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
						domain={[0, 60]}
						unknownColor='#666666'
						label='properties.name'
						valueFormat='.2s'
						projectionScale={125}
						projectionTranslation={[0.5, 0.6]}
						projectionRotation={[0, 0, 0]}
						borderWidth={1}
						borderColor='#152538'
						legends={[
							{
								anchor: 'bottom-left',
								direction: 'column',
								justify: true,
								translateX: 100,
								translateY: -25,
								itemsSpacing: 0,
								itemWidth: 94,
								itemHeight: 18,
								itemDirection: 'left-to-right',
								itemTextColor: palette.secondaryCustom[200],
								itemOpacity: 0.85,
								symbolSize: 18,
								effects: [
									{
										on: 'hover',
										style: {
											itemTextColor: palette.backgroundAlt.alt,
											itemOpacity: 1,
										},
									},
								],
							},
						]}
					/>
				</GeographyContainer>
			) : (
				<ContentContainer>Loading...</ContentContainer>
			)}
		</PageContainer>
	);
};
