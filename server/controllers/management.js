import mongoose from 'mongoose';
import Transaction from '../models/Transaction.js';
import User from '../models/User.js';

export const getAdmins = async (req, res) => {
	try {
		const admins = await User.find({ role: 'admin' })
			.select('-password')
			.exec();

		res.json(admins);
	} catch (error) {
		console.log(error);

		res.status(500).json({
			message: error.message,
		});
	}
};

export const getUserPerformance = async (req, res) => {
	try {
		const { id } = req.params;

		const userWithStats = await User.aggregate([
			{ $match: { _id: new mongoose.Types.ObjectId(id) } },
			{
				$lookup: {
					from: 'affiliatestats',
					localField: '_id',
					foreignField: 'userId',
					as: 'affiliateStats',
				},
			},
			{ $unwind: '$affiliateStats' },
		]);

		console.log(userWithStats);

		const saleTransactions = await Promise.all(
			userWithStats[0].affiliateStats.affiliateSales.map((id) => {
				return Transaction.findById(id);
			})
		);

		const filteredSaleTransactions = saleTransactions.filter(
			(transaction) => transaction !== null
		);

		res.json({ user: userWithStats[0], sales: filteredSaleTransactions });
	} catch (error) {
		console.log(error);

		res.status(500).json({
			message: error.message,
		});
	}
};
