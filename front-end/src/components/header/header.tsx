import { Typography, useTheme } from '@mui/material';
import { Title } from './header.styled';

type Props = {
	title: string;
	subtitle?: string;
};

export const Header = ({ title, subtitle }: Props) => {
	const { palette } = useTheme();

	return (
		<>
			<Title variant='h2' color={palette.secondaryCustom[100]}>
				{title}
			</Title>
			<Typography variant='h5' color={palette.secondaryCustom[300]}>
				{subtitle}
			</Typography>
		</>
	);
};
