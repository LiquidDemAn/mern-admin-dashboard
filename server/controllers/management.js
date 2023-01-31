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
