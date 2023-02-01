import User from '../models/User.js';
import Transaction from '../models/Transaction.js';
import OverallStat from '../models/OverallStat.js';

export const getUser = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findById(id).select('-password').exec();

		if (!user) {
			return res.status(404).json({
				message: 'User not found!',
			});
		}

		res.json(user);
	} catch (error) {
		console.log(error);

		res.status(500).json({
			message: error.message,
		});
	}
};

export const getDashboardStat = async (req, res) => {
	try {
		// Hardcoded values
		const currentMonth = 'November';
		const currentYear = 2021;
		const currentDay = '2021-11-15';

		// Recent Transactions
		const transactions = await Transaction.find()
			.limit(50)
			.sort({ createdAt: -1 })
			.exec();

		// Overall Stats
		const overallStat = await OverallStat.find({
			year: currentYear,
		}).exec();

		const {
			totalCustomers,
			yearlySalesTotal,
			yearlyTotalSoldUnits,
			monthlyData,
			dailyData,
		} = overallStat[0];

		const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
			return month === currentMonth;
		});

		const thisDayStats = overallStat[0].dailyData.find(({ date }) => {
			return date === currentDay;
		});

		res.json({
			totalCustomers,
			yearlySalesTotal,
			yearlyTotalSoldUnits,
			monthlyData,
			dailyData,
			thisMonthStats,
			thisDayStats,
			transactions,
		});
	} catch (error) {
		console.log(error);

		res.status(500).json({
			message: error.message,
		});
	}
};
