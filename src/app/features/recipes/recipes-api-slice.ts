import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { Recipe } from './recipes-slice';

interface FetchRecipesParams {
  number?: number;
  cuisine?: string;
  searchParams?: string;
}

// const apiKey = 'df9545145a594666ac0839221d46d8be'; // paid access temporary disabled (emailed support)

const tempApiKey = '61703b54a739422e8eca806d87112e15';
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spoonacular.com/recipes',
    prepareHeaders(headers) {
      headers.set('content-type', 'application/json');
      headers.set('x-api-key', tempApiKey);
    },
  }),
  endpoints(builder) {
    const commonQuery = (params: FetchRecipesParams) => {
      let queryString = '';
      if (params.cuisine && params.cuisine !== 'All') {
        queryString += `&cuisine=${params.cuisine}`;
      }
      if (params.searchParams) {
        queryString += `&query=${encodeURIComponent(
          params.searchParams
        )}`;
      }
      return queryString;
    };

    return {
      fetchRandom: builder.query<
        { recipes: Recipe[] },
        FetchRecipesParams
      >({
        query({ number, cuisine }) {
          let queryString = `/random?number=${number}`;
          queryString += commonQuery({ number, cuisine });
          return queryString;
        },
      }),

      fetchRecipes: builder.query<
        { results: Recipe[] },
        FetchRecipesParams
      >({
        query({ number, cuisine, searchParams }) {
          let queryString = `/complexSearch?nubmer=${number}`;
          queryString += commonQuery({
            number,
            cuisine,
            searchParams,
          });
          return queryString;
        },
      }),
      fetchRecipeById: builder.query<Recipe, { id: string }>({
        query({ id }) {
          return `/${id}/information?includeNutrition=false`;
        },
      }),
    };
  },
});

export const {
  useFetchRandomQuery,
  useFetchRecipesQuery,
  useFetchRecipeByIdQuery,
} = apiSlice;
