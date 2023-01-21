export type UserType = {
	_id: string;
	name: string;
	email: string;
	password: string;
	city: string;
	state: string;
	country: string;
	occupation: string;
	phoneNumber: string;
	role: 'user' | 'admin' | 'superadmin';
	transactions: string[];
};
