import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
	ProductType,
	TransactionType,
	UserType,
	TransactionParams,
	CountryStatType,
	SalesType,
	UserPerformanceType,
	DashboardStatType,
} from './typedef';

export const api = createApi({
	reducerPath: 'adminApi',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
	tagTypes: [
		'User',
		'Products',
		'Customers',
		'Transactions',
		'Geography',
		'Sales',
		'Admins',
		'Performance',
		'Dashboard',
	],
	endpoints: (build) => ({
		getUser: build.query<UserType, string>({
			query: (id) => `general/user/${id}`,
			providesTags: ['User'],
		}),
		getProducts: build.query<ProductType[], void>({
			query: () => 'client/products',
			providesTags: ['Products'],
		}),
		getCustomers: build.query<UserType[], void>({
			query: () => 'client/customers',
			providesTags: ['Customers'],
		}),
		getTransactions: build.query<
			{ total: number; transactions: TransactionType[] },
			TransactionParams
		>({
			query: ({ page, pageSize, sort, search }) => ({
				url: 'client/transactions',
				method: 'GET',
				params: { page, pageSize, sort, search },
			}),
			providesTags: ['Transactions'],
		}),
		getGeography: build.query<CountryStatType[], void>({
			query: () => 'client/geography',
			providesTags: ['Geography'],
		}),
		getSales: build.query<SalesType, void>({
			query: () => 'sales/sales',
			providesTags: ['Sales'],
		}),
		getAdmins: build.query<UserType[], void>({
			query: () => 'management/admins',
			providesTags: ['Admins'],
		}),
		getUserPerformance: build.query<UserPerformanceType, string>({
			query: (id) => `management/performance/${id}`,
			providesTags: ['Performance'],
		}),
		getDashboardStat: build.query<DashboardStatType, void>({
			query: () => 'general/dashboard',
			providesTags: ['Dashboard'],
		}),
	}),
});

export const {
	useGetUserQuery,
	useGetProductsQuery,
	useGetCustomersQuery,
	useGetTransactionsQuery,
	useGetGeographyQuery,
	useGetSalesQuery,
	useGetAdminsQuery,
	useGetUserPerformanceQuery,
	useGetDashboardStatQuery,
} = api;
