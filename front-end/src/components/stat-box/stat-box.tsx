import { ReactElement } from 'react';
import { Typography, useTheme } from '@mui/material';
import { Container, Increase, Value } from './stat-box.styled';
import { FlexBetween } from '../../global.styled';

type Props = {
	title: string;
	value?: number;
	increase: string;
	icon: ReactElement;
	description: string;
};

export const StatBox = ({
	title,
	value,
	increase,
	icon,
	description,
}: Props) => {
	const { palette } = useTheme();

	return (
		<Container palette={palette}>
			<FlexBetween>
				<Typography variant='h6' color={palette.secondaryCustom[100]}>
					{title}
				</Typography>
				{icon}
			</FlexBetween>

			<Value variant='h3' color={palette.secondaryCustom[200]}>
				{value}
			</Value>

			<FlexBetween gap='1rem'>
				<Increase variant='h5' color={palette.secondary.light}>
					{increase}
				</Increase>

				<Typography>{description}</Typography>
			</FlexBetween>
		</Container>
	);
};
