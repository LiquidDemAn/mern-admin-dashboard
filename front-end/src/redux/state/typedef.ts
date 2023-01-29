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
	createdAt: Date;
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
	createdAt: Date;
};

export type TransactionParams = {
	page?: number;
	pageSize?: number;
	sort?: string | null;
	search?: string;
};

export type TransactionType = {
	_id: string;
	userId: string;
	cost: string;
	products: string[];
	createdAt: Date;
};

export type CountryStatType = {
	id: string;
	value: string;
};

export type SalesType = {
	_id: string;
	totalCustomers: number;
	yearlySalesTotal: number;
	yearlyTotalSoldUnits: number;
	year: number;
	monthlyData: MonthDataType[];
	dailyData: DayDataType[];
	salesByCategory: {
		[key: string]: number;
	};
	createdAt: Date;
};
