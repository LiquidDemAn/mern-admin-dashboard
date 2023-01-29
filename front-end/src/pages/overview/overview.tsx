import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';
import { Header } from '../../components/header';
import { OverviewChart } from '../../components/overview-chart';
import { ContentContainer, PageContainer } from '../../global.styled';

export enum OverviewSelectEnum {
	Sales = 'sales',
	Units = 'units',
}

export const OverviewPage = () => {
	const [view, setView] = useState(OverviewSelectEnum.Units);

	const onChange = (event: SelectChangeEvent<OverviewSelectEnum>) => {
		const value = event.target.value as OverviewSelectEnum;
		setView(value);
	};

	return (
		<PageContainer>
			<Header
				title='Overview'
				subtitle='Overview of general revenue and profit'
			/>
			<ContentContainer>
				<FormControl>
					<InputLabel>View</InputLabel>
					<Select value={view} label='View' onChange={onChange}>
						<MenuItem value={OverviewSelectEnum.Sales}>Sales</MenuItem>
						<MenuItem value={OverviewSelectEnum.Units}>Units</MenuItem>
					</Select>
				</FormControl>
				<OverviewChart view={view} />
			</ContentContainer>
		</PageContainer>
	);
};
