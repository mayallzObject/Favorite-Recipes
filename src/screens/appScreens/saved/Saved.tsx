import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLayout from '@components/AppLayout';
import { Recipe } from '@app/features/recipes/recipes-slice';

const Saved = () => {
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
  console.log(savedRecipes);
  useEffect(() => {
    const getSavedRecipes = async () => {
      try {
        const savedRecipesData = await AsyncStorage.getItem(
          '@MyApp:cachedData'
        );
        if (savedRecipesData) {
          setSavedRecipes(JSON.parse(savedRecipesData));
        }
      } catch (error) {
        console.error('Error retrieving saved recipes:', error);
      }
    };

    getSavedRecipes();
  }, []);

  return (
    <AppLayout noPaddingTop>
      {savedRecipes.map((recipe, index) => (
        <Text key={index}>{recipe.title}</Text>
      ))}
    </AppLayout>
  );
};

export default Saved;
