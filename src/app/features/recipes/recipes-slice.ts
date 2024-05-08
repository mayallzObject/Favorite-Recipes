import { createSlice } from '@reduxjs/toolkit';

export interface Recipe {
  id: string;
  title: string;
  image: string;
  imageType: string;
  servings: number;
  readyInMinutes: number;
  license: string;
  sourceName: string;
  sourceUrl: string;
  spoonacularSourceUrl: string;
  healthScore: number;
  spoonacularScore: number;
  pricePerServing: number;
  analyzedInstructions: any[]; // Consider defining a proper type for this
  cheap: boolean;
  creditsText: string;
  cuisines: string[];
  dairyFree: boolean;
  diets: string[];
  gaps: string;
  glutenFree: boolean;
  instructions: string;
  ketogenic: boolean;
  lowFodmap: boolean;
  occasions: string[];
  sustainable: boolean;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  whole30: boolean;
  weightWatcherSmartPoints: number;
  dishTypes: string[];
  extendedIngredients: ExtendedIngredient[];
  summary: string;
  winePairing: WinePairing;
}

export interface ExtendedIngredient {
  aisle: string;
  amount: number;
  consitency: string;
  id: number;
  image: string;
  measures: Measures;
  meta: string[];
  name: string;
  original: string;
  originalName: string;
  unit: string;
}

export interface Measures {
  metric: Metric;
  us: Metric;
}

export interface Metric {
  amount: number;
  unitLong: string;
  unitShort: string;
}

export interface WinePairing {
  pairedWines: string[];
  pairingText: string;
  productMatches: ProductMatch[];
}

export interface ProductMatch {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  averageRating: number;
  ratingCount: number;
  score: number;
  link: string;
}

export const initialState: Recipe = {
  id: '',
  title: '',
  image: '',
  imageType: '',
  servings: 0,
  readyInMinutes: 0,
  license: '',
  sourceName: '',
  sourceUrl: '',
  spoonacularSourceUrl: '',
  healthScore: 0,
  spoonacularScore: 0,
  pricePerServing: 0,
  analyzedInstructions: [],
  cheap: false,
  creditsText: '',
  cuisines: [],
  dairyFree: false,
  diets: [],
  gaps: '',
  glutenFree: false,
  instructions: '',
  ketogenic: false,
  lowFodmap: false,
  occasions: [],
  sustainable: false,
  vegan: false,
  vegetarian: false,
  veryHealthy: false,
  veryPopular: false,
  whole30: false,
  weightWatcherSmartPoints: 0,
  dishTypes: [],
  extendedIngredients: [],
  summary: '',
  winePairing: {
    pairedWines: [],
    pairingText: '',
    productMatches: [],
  },
};

const recipesSlice = createSlice({
  name: 'recipesSlice',
  initialState,
  reducers: {},
});

export default recipesSlice.reducer;
