import { Header } from '../../components/header';
import { Product } from '../../components/product';
import { useGetProductsQuery } from '../../redux/state/api';
import { Container, Products } from './products.styled';

export const ProductsPage = () => {
	const { data, isLoading } = useGetProductsQuery();

	return (
		<Container>
			<Header title='products' subtitle='See your list of products' />
			{data || !isLoading ? (
				<Products>
					{data?.map((product) => (
						<Product key={product._id} product={product} />
					))}
				</Products>
			) : (
				<>Loading...</>
			)}
		</Container>
	);
};
