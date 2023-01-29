import OverallStat from '../models/OverallStat.js';

export const getSales = async (req, res) => {
	try {
		const overallStat = await OverallStat.find().exec();

		res.json(overallStat[0]);
	} catch (error) {
		console.log(error);

		res.status(500).json({
			message: error.message,
		});
	}
};
