import Product from '../models/Product.js';
import ProductStat from '../models/ProductStat.js';
import Transaction from '../models/Transaction.js';
import User from '../models/User.js';
import { generateSort } from '../utils.js';
import getCountryIso3 from 'country-iso-2-to-3';

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
		const { page = 0, pageSize = 20, sort = null, search = '' } = req.query;

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

		const total = await Transaction.count();

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

export const getGeography = async (req, res) => {
	try {
		const users = await User.find().exec();

		const mappedLocations = users.reduce((acc, { country }) => {
			const countryISO3 = getCountryIso3(country);

			if (!acc[countryISO3]) {
				acc[countryISO3] = 0;
			}

			acc[countryISO3]++;

			return acc;
		}, {});

		const formattedLocations = Object.entries(mappedLocations).map(
			([country, count]) => {
				return { id: country, value: count };
			}
		);

		res.json(formattedLocations);
	} catch (error) {
		console.log(error);

		res.status(500).json({
			message: error.message,
		});
	}
};
