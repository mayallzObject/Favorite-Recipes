import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Recipe } from '@app/features/recipes/recipes-slice';

const useSavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const existingData = await AsyncStorage.getItem(
          '@MyApp:cachedData'
        );
        if (existingData) {
          const savedRecipesData = JSON.parse(existingData);
          setSavedRecipes(savedRecipesData);
        }
      } catch (error) {
        console.error('Error fetching saved recipes:', error);
      }
    };

    fetchSavedRecipes();
  }, []); // Empty dependency array to run once when the component mounts

  const isSaved = (item: Recipe) =>
    savedRecipes.some((oldItem) => oldItem?.id === item?.id);

  const handleSave = async (item: Recipe) => {
    try {
      let updatedSavedRecipes: Recipe[] = [];
      const isAlreadySaved = isSaved(item);

      if (isAlreadySaved) {
        updatedSavedRecipes = savedRecipes.filter(
          (savedItem) => savedItem.id !== item.id
        );
      } else {
        updatedSavedRecipes = [...savedRecipes, item];
      }

      await AsyncStorage.setItem(
        '@MyApp:cachedData',
        JSON.stringify(updatedSavedRecipes)
      );
      setSavedRecipes(updatedSavedRecipes);
    } catch (error) {
      console.error('Error updating saved recipes:', error);
    }
  };

  return { handleSave, isSaved };
};

export default useSavedRecipes;
