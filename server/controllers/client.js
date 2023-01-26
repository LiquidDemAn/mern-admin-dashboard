import Product from '../models/Product.js';
import ProductStat from '../models/ProductStat.js';
import Transaction from '../models/Transaction.js';
import User from '../models/User.js';
import { generateSort } from '../utils.js';

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

export const getTransactions = async (req, res) => {
	try {
		// sort should look like this: {'field': 'userId', 'sort': 'desc'}
		const { page = 1, pageSize = 20, sort = null, search = '' } = req.query;

		const sortFormatted = Boolean(sort) ? generateSort(sort) : {};

		const transactions = await Transaction.find({
			$or: [
				{ cost: { $regex: new RegExp(search, 'i') } },
				{ userId: { $regex: new RegExp(search, 'i') } },
			],
		})
			.sort(sortFormatted)
			.skip(page * pageSize)
			.limit(pageSize);

		const total = await Transaction.countDocuments({
			name: { $regex: search, $options: 'i' },
		});

		res.json({
			transactions,
			total,
		});
	} catch (error) {
		console.log(error);

		res.status(500).json({
			message: error.message,
		});
	}
};
