import { Header } from '../../components/header';
import { Product } from '../../components/product';
import { PageContainer } from '../../global.styled';
import { useGetProductsQuery } from '../../redux/state/api';
import { Products } from './products.styled';

export const ProductsPage = () => {
	const { data, isLoading } = useGetProductsQuery();

	return (
		<PageContainer>
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
		</PageContainer>
	);
};
