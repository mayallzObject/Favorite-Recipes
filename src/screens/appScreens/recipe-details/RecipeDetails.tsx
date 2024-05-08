import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import AppLayout from '@components/AppLayout';
import { useRoute } from '@react-navigation/native';
import { useFetchRecipeByIdQuery } from 'src/app/features/recipes/recipes-api-slice';
import { RouteProp } from '@react-navigation/core';
import { RootStackParamList } from 'src/navigation/types';
import { themeColors } from 'src/constants/Colors';
import UserAvatarIcon from '@components/icons/UserAvatarIcon';
import LocationPointerIcon from '@components/icons/LocationPointerIcon.tsx';
import CustomButton from '@components/buttons/CustomButton';
import ArrowLeftIcon from '@components/icons/ArrowLeftIcon';
import DotsIcon from '@components/icons/DotsIcon';
import StackNavHeader from 'src/navigation/components/StackNavHeader';
import Layout from 'src/constants/Layout';
import { fonts } from '@constants/typography';
import useSafeAreaView from '@hooks/useSafeAreaView';
import SaveIconWithBackground from '@components/icons/SaveIconWithBackground';
import ClockIcon from '@components/icons/ClockIcon';
import useSavedRecipes from '@hooks/useSavedRecipes';
import { useNavigation } from '@react-navigation/native';
type ScreenRouteProp = RouteProp<RootStackParamList, 'RecipeDetails'>;

const IMAGE_WIDTH =
  Layout.window.width - Layout.horizontalPadding.medium * 2;

const RecipeDetails = () => {
  const { goBack } = useNavigation();
  const { top } = useSafeAreaView();

  const { params } = useRoute<ScreenRouteProp>();
  const { data } = useFetchRecipeByIdQuery({
    id: params?.id,
  });

  const { handleSave, isSaved } = useSavedRecipes();

  return (
    <View style={{ flex: 1 }}>
      <StackNavHeader
        leftIcon={<ArrowLeftIcon />}
        rightIcon={<DotsIcon />}
        onLeftIconPress={goBack}
        hasDropDown
        child={
          <View
            style={{
              height: 180,
              width: 160,
              backgroundColor: themeColors.neutrals.white,
              position: 'absolute',
              top: top + 20,
              borderRadius: 10,
              paddingVertical: 10,
              paddingHorizontal: 8,
              justifyContent: 'space-around',
              right: Layout.horizontalPadding.medium,
              zIndex: 2000,
            }}
          >
            <TouchableOpacity>
              <Text>(icon) share</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>(icon) Rate Recipe</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>(icon) Review</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSave(data!)}>
              <Text>(icon) {isSaved(data!) ? 'unsave' : 'save'}</Text>
            </TouchableOpacity>
          </View>
        }
      />
      <AppLayout
        noPaddingTop
        horizontalPadding={Layout.horizontalPadding.medium}
      >
        <View>
          <ImageBackground
            source={{ uri: data?.image }}
            borderRadius={10}
            style={{
              flexDirection: 'row',
              height: 150,
              width: IMAGE_WIDTH,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              paddingVertical: 8,
              columnGap: 10,
            }}
            resizeMode="cover"
          >
            <View style={styles.generalInfoWrapper}>
              <ClockIcon fillColor={themeColors.neutrals.black1} />

              <Text style={styles.timeText}>
                {data?.readyInMinutes} mins
              </Text>
            </View>
            <TouchableOpacity onPress={() => handleSave(data!)}>
              <SaveIconWithBackground
                fillColor={
                  isSaved(data!)
                    ? themeColors.primary.primary100
                    : themeColors.neutrals.gray3
                }
              />
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.titleContainer}>
            <Text numberOfLines={2} style={styles.titleText}>
              {data?.title}
            </Text>
            <Text style={styles.reviewsText}>(13k reviews)</Text>
          </View>

          <View style={styles.authorContainer}>
            <View style={styles.authorInfoContainer}>
              <View style={styles.authorImageContainer}>
                <UserAvatarIcon
                  width={40}
                  height={40}
                  viewBox="0 0 24 24"
                  fillColor={themeColors.neutrals.gray4}
                />
              </View>
              <View>
                <Text style={styles.authorNameText}>
                  {data?.sourceName}
                </Text>
                <View style={styles.authorLocationContainer}>
                  <LocationPointerIcon width={17} height={17} />
                  <Text style={styles.authorLocationText}>
                    Town, Country
                  </Text>
                </View>
              </View>
            </View>

            <CustomButton size="small" title="Follow" />
          </View>
        </View>
      </AppLayout>
    </View>
  );
};

export default RecipeDetails;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  titleText: {
    ...fonts.smallBold,
    color: themeColors.neutrals.black1,
    maxWidth: Layout.window.width / 2,
  },
  reviewsText: {
    ...fonts.smallRegular,
    color: themeColors.neutrals.gray3,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  authorInfoContainer: {
    columnGap: 10,
    flexDirection: 'row',
  },
  authorImageContainer: {
    alignItems: 'center',
    borderRadius: 120,
    backgroundColor: themeColors.primary.primary80,
  },
  authorNameText: {
    ...fonts.smallBold,
    flexWrap: 'wrap',
    color: themeColors.neutrals.black2,
  },
  authorLocationText: {
    ...fonts.smallerRegular,
    color: themeColors.neutrals.black2,
  },
  authorLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  generalInfoWrapper: {
    flexDirection: 'row',
    columnGap: 6,
    alignSelf: 'flex-end',
    paddingBottom: 4,
  },
  timeText: {
    ...fonts.smallerBold,
    color: themeColors.neutrals.black1,
  },
});
