import { configureStore } from '@reduxjs/toolkit';
import employeeAPI from '../api';

export const store = configureStore({
  reducer: {
    [employeeAPI.reducerPath]: employeeAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeAPI.middleware),
});
