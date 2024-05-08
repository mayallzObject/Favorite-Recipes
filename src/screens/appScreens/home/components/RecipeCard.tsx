import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { themeColors } from '@constants/Colors';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SaveIconWithBackground from '@components/icons/SaveIconWithBackground';
import { Recipe } from '@app/features/recipes/recipes-slice';
import { fonts } from '@constants/typography';
import useSavedRecipes from '@hooks/useSavedRecipes';

const RecipeCard = ({ item }: { item: Recipe }) => {
  const { navigate } = useNavigation();
  const { handleSave, isSaved } = useSavedRecipes();

  const handleNavigateToDetails = (id: string) =>
    navigate('RecipeDetails', { id });

  return (
    <TouchableOpacity
      onPress={() => handleNavigateToDetails(item.id)}
      style={styles.container}
    >
      <View style={styles.wrapper}>
        <Image
          source={{ uri: `${item.image}` ?? '' }}
          width={109}
          height={110}
          borderRadius={70}
          resizeMode="cover"
          style={styles.image}
          alt="no image"
        />
        <View style={styles.contentWrapper}>
          <Text style={styles.titleText} numberOfLines={2}>
            {item.title}
          </Text>
          <View style={styles.timeContainer}>
            <View>
              <Text style={styles.timeHeaderText}>Time</Text>
              <Text style={styles.minutesText}>
                {item.readyInMinutes
                  ? item.readyInMinutes
                  : '15 Mins'}
              </Text>
            </View>
            <TouchableOpacity onPress={() => handleSave(item)}>
              <SaveIconWithBackground
                fillColor={
                  isSaved(item)
                    ? themeColors.primary.primary100
                    : themeColors.neutrals.gray3
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(217, 217, 217, 0.5)',
    borderRadius: 12,
    paddingHorizontal: 11,
    paddingBottom: 12,
  },
  wrapper: {
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: -55,
    left: 12,
  },
  contentWrapper: {
    height: 166,
    width: 128,
  },
  titleText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 65,
    paddingHorizontal: 10,
    color: themeColors.neutrals.gray1,
  },
  timeContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 'auto',
  },
  timeHeaderText: {
    ...fonts.smallerRegular,
    color: themeColors.neutrals.gray3,
  },
  minutesText: {
    ...fonts.smallerBold,
    color: themeColors.neutrals.gray1,
  },
});
