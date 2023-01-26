export type UserType = {
	_id: string;
	name: string;
	email: string;
	city: string;
	state: string;
	country: string;
	occupation: string;
	phoneNumber: string;
	role: 'user' | 'admin' | 'superadmin';
	transactions: string[];
};

type DayDataType = {
	_id: string;
	data: string;
	totalSales: number;
	totalUnits: number;
};

type MonthDataType = {
	_id: string;
	month: string;
	totalSales: number;
	totalUnits: number;
};

export type ProductStatType = {
	_id: string;
	productId: string;
	yearlySalesTotal: number;
	yearlyTotalSoldUnits: number;
	dailyData: DayDataType[];
	monthlyData: MonthDataType[];
	createdAt: string;
};

export type ProductType = {
	_id: string;
	name: string;
	category: string;
	description: string;
	price: number;
	rating: number;
	supply: number;
	stat: ProductStatType;
	createdAt: string;
};

export type TransactionParams = {
	page?: number;
	pageSize?: number;
	sort?: {
		[key: string]: string;
	};
	search?: string;
};

export type TransactionType = {
	_id: string;
	userId: string;
	cost: string;
	products: string[];
	createdAt: Date;
};
