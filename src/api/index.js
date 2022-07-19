import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const employeeAPI = createApi({
  reducerPath: 'employeeAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:4000/api/employee' }),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => '/',
      providesTags: ['getEmployees'],
    }),
    getEmployeeById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ['getEmployeeById'],
    }),
    createEmployee: builder.mutation({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['getEmployees'],
    }),
    updateEmployee: builder.mutation({
      query: ({ id, employee }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: employee,
      }),
      invalidatesTags: ['getEmployees', 'getEmployeeById'],
    }),
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['getEmployees'],
    }),
  }),
});

export default employeeAPI;
export const {
  useGetEmployeesQuery,
  useGetEmployeeByIdQuery,
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeeAPI;
