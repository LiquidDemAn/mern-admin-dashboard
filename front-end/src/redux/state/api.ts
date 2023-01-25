import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductType, UserType } from './typedef';

export const api = createApi({
	reducerPath: 'adminApi',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
	tagTypes: ['User', 'Products', 'Customers'],
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
	}),
});

export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery } =
	api;
