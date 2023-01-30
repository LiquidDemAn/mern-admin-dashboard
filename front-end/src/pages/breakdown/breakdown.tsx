import { BreakdownChart } from '../../components/breakdown-chart';
import { Header } from '../../components/header';
import { ContentContainer, PageContainer } from '../../global.styled';

export const BreakdownPage = () => {
	return (
		<PageContainer>
			<Header title='Breakdown' subtitle='Breakdown of Sales By Category' />
			<ContentContainer>
				<BreakdownChart />
			</ContentContainer>
		</PageContainer>
	);
};
