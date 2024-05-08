import { configureStore } from '@reduxjs/toolkit';
import { authApiSlice } from './features/auth/auth-api-slice';
import { apiSlice } from './features/recipes/recipes-api-slice';
import authSlice from './features/auth/auth-slice';
import recipesSlice from './features/recipes/recipes-slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    recipes: recipesSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      authApiSlice.middleware,
      apiSlice.middleware
    );
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
