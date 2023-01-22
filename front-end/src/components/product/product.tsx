import {
	Button,
	CardContent,
	Rating,
	Typography,
	useTheme,
	CardActions,
	Collapse,
} from '@mui/material';
import { useState } from 'react';
import { ProductType } from '../../redux/state/typedef';
import { Category, Container, Price } from './product.styled';

type Props = {
	product: ProductType;
};

export const Product = ({ product }: Props) => {
	const { palette } = useTheme();
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpend = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<Container backgroundColor={palette.backgroundAlt.alt}>
			<CardContent>
				<Category color={palette.secondaryCustom[700]} gutterBottom>
					{product.category}
				</Category>
				<Typography variant='h5' component='div'>
					{product.name}
				</Typography>
				<Price>${product.price.toFixed(2)}</Price>
				<Rating value={product.rating} readOnly />
				<Typography variant='body2'>{product.description}</Typography>
			</CardContent>
			<CardActions>
				<Button variant='text' size='small' onClick={toggleExpend}>
					See More
				</Button>
			</CardActions>
			<Collapse
				in={isExpanded}
				timeout='auto'
				unmountOnExit
				color={palette.neutral[300]}
			>
				<CardContent>
					<Typography>id: {product._id}</Typography>
					<Typography>Supply Left: {product.supply}</Typography>
					<Typography>
						Yearly Sales This Year: {product.stat.yearlySalesTotal}
					</Typography>
					<Typography>
						Yearly Units Sold This Year: {product.stat.yearlyTotalSoldUnits}
					</Typography>
				</CardContent>
			</Collapse>
		</Container>
	);
};
