import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { themeColors } from 'src/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { fonts } from '@constants/typography';
import { Recipe } from '@app/features/recipes/recipes-slice';
import ClockIcon from '@components/icons/ClockIcon';
import ProfileIcon from '@components/icons/ProfileIcon';
import React from 'react';

const RandomRecipeCard = ({ item }: { item: Recipe }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigate('RecipeDetails', { id: item.id })}
      style={styles.container}
    >
      <View style={styles.contentWrapper}>
        <View style={styles.titleContainer}>
          <Text style={fonts.smallBold} numberOfLines={1}>
            {item.title ?? ''}
          </Text>
          <View id="Rating">
            <Text>Rating</Text>
          </View>
        </View>
        <Image
          source={{ uri: `${item.image}` }}
          width={80}
          height={86}
          borderRadius={50}
          style={styles.image}
        />
      </View>
      <View style={styles.generalInfoContainer}>
        <View style={styles.generalInfoWrapper}>
          <ProfileIcon
            width={15}
            height={15}
            strokeColor={themeColors.neutrals.gray3}
          />
          <Text numberOfLines={2} style={styles.authorText}>
            By {item.sourceName}
          </Text>
        </View>
        <View style={styles.generalInfoWrapper}>
          <ClockIcon />
          <Text style={styles.timeText}>
            {item.readyInMinutes} mins
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RandomRecipeCard;

const styles = StyleSheet.create({
  container: {
    width: 251,
    height: 95,
    marginBottom: 10,
    backgroundColor: themeColors.neutrals.white,
    ...Platform.select({
      ios: {
        shadowColor: themeColors.neutrals.gray2,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
    borderRadius: 10,
  },
  contentWrapper: {
    columnGap: 20,
    padding: 10,
    flexDirection: 'row',
    position: 'relative',
  },
  titleContainer: {
    width: '60%',
    rowGap: 4,
  },
  image: {
    position: 'absolute',
    top: -32,
    right: 10,
  },
  generalInfoContainer: {
    padding: 10,
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  generalInfoWrapper: {
    flexDirection: 'row',
    columnGap: 6,
    alignItems: 'center',
  },
  timeText: {
    ...fonts.smallerBold,
    color: themeColors.neutrals.gray3,
  },
  authorText: {
    ...fonts.smallerRegular,
    color: themeColors.neutrals.gray3,
  },
});
