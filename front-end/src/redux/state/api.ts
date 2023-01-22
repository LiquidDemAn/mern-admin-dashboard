import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserType } from './typedef';

export const api = createApi({
	reducerPath: 'adminApi',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
	tagTypes: ['User', 'Products'],
	endpoints: (build) => ({
		getUser: build.query<UserType, string>({
			query: (id) => `general/user/${id}`,
			providesTags: ['User'],
		}),
		getProducts: build.query<any, void>({
			query: (arg) => 'client/products',
			providesTags: ['Products'],
		}),
	}),
});

export const { useGetUserQuery, useGetProductsQuery } = api;
