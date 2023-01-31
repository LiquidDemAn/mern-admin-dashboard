import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
	ProductType,
	TransactionType,
	UserType,
	TransactionParams,
	CountryStatType,
	SalesType,
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
} = api;
