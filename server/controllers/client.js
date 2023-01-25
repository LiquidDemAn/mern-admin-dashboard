import Product from '../models/Product.js';
import ProductStat from '../models/ProductStat.js';
import User from '../models/User.js';

export const getProducts = async (req, res) => {
	try {
		const products = await Product.find().exec();

		const productsWithStats = await Promise.all(
			products.map(async (product) => {
				const stat = await ProductStat.findOne({
					productId: product._id,
				}).exec();

				return {
					...product._doc,
					stat,
				};
			})
		);

		res.json(productsWithStats);
	} catch (error) {
		console.log(error);

		res.status(500).json({
			message: error.message,
		});
	}
};

export const getCustomers = async (req, res) => {
	try {
		const customers = await User.find({ role: 'user' })
			.select('-password')
			.exec();

		res.json(customers);
	} catch (error) {
		console.log(error);

		res.status(500).json({
			message: error.message,
		});
	}
};
