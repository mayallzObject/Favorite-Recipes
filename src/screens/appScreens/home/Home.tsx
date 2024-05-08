import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AppLayout from '@components/AppLayout';
import React, { useEffect, useState } from 'react';
import {
  useFetchRandomQuery,
  useFetchRecipesQuery,
} from '@app/features/recipes/recipes-api-slice';
import { themeColors } from '@constants/Colors';
import RecipeCard from './components/RecipeCard';
import RandomRecipeCard from './components/RandomRecipeCard';
import FilterAndSearch from '../common-components/FilterAndSearch';
import FilterDrawer from '../common-components/FiltersDrawer';
import Layout from '@constants/Layout';
import { fonts } from '@constants/typography';
import { Recipe } from '@app/features/recipes/recipes-slice';

const cuisingTabs = [
  'All',
  'African',
  'Asian',
  'American',
  'British',
  'Cajun',
  'Caribbean',
  'Chinese',
  'Eastern European',
  'European',
  'French',
  'German',
  'Greek',
  'Indian',
  'Irish',
  'Italian',
  'Japanese',
  'Jewish',
  'Korean',
  'Latin American',
  'Mediterranean',
  'Middle Eastern',
  'Nordic',
  'Southern',
  'Spanish',
  'Thai',
  'Vietnamese',
];

const Home = () => {
  const [randomRecipes, setRandomRecipes] = useState<Recipe[]>();
  const [recipes, setRecipes] = useState<Recipe[]>();
  const [cuisine, setCuisine] = useState<string>('All');
  const [vis, setVis] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');

  const {
    data: bigData,
    error: bigDataError,
    isFetching: isFetchingBig,
  } = useFetchRecipesQuery({
    number: cuisine && cuisine !== 'All' ? 100 : 10,
    cuisine: cuisine !== 'All' ? cuisine : '',
  });

  const { data, isFetching } = useFetchRandomQuery({
    number: 10,
    cuisine: cuisine !== 'All' ? cuisine : '',
  });

  useEffect(() => {
    if (!isFetchingBig && !isFetching) {
      setRecipes(bigData?.results);
      setRandomRecipes(data?.recipes ?? []);
    }
  }, [isFetching, isFetchingBig, cuisine]);

  const renderBigItem = ({ item }: { item: any }) => {
    return <RecipeCard item={item} />;
  };

  const renderItem = ({ item }: { item: any }) => {
    return <RandomRecipeCard item={item} />;
  };

  return (
    <AppLayout horizontalPadding={0}>
      <View
        style={{
          paddingHorizontal: Layout.horizontalPadding.medium,
        }}
      >
        <View style={styles.headerContanier}>
          <Text style={styles.header}>Hello, user</Text>
          <Text style={styles.subHeader}>
            What are you cooking today?
          </Text>
        </View>
        <FilterAndSearch
          onPress={() => {
            setVis(true);
          }}
          onChangeText={(text: string) => setSearchText(text)}
          searchText={searchText}
        />
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{
                flexDirection: 'row',
                columnGap: 2,
                marginVertical: 12,
                paddingVertical: 12,
                alignItems: 'center',
              }}
            >
              {cuisingTabs.map((item, index) => (
                <TouchableOpacity
                  key={item}
                  style={{
                    paddingVertical: 7,
                    paddingHorizontal: 24,
                    backgroundColor:
                      item === cuisine ||
                      (index === 0 && cuisine === '')
                        ? themeColors.primary.primary100
                        : 'transparent',
                    borderRadius: 10,
                  }}
                  onPress={() =>
                    setCuisine(item === 'All' ? '' : item)
                  }
                >
                  <Text
                    style={[
                      fonts.smallerBold,
                      {
                        color:
                          item === cuisine ||
                          (index === 0 && cuisine === '')
                            ? themeColors.neutrals.white
                            : themeColors.primary.primary100,
                      },
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={{ flexShrink: 1 }}>
        <FlatList
          horizontal={true}
          data={recipes}
          keyExtractor={({ id }, index) => `${index}-${id}`}
          ListEmptyComponent={<Text>Empty :(</Text>}
          renderItem={renderBigItem}
          contentContainerStyle={{
            alignItems: 'center',
            paddingTop: 60,
            paddingBottom: 10,
            paddingHorizontal: Layout.horizontalPadding.medium,
            columnGap: 20,
          }}
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0 }}
        />
      </View>
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: Layout.horizontalPadding.medium,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            fontWeight: '600',
            color: themeColors.neutrals.black1,
          }}
        >
          Feeling Lucky
        </Text>
      </View>
      <View style={{ flexShrink: 1 }}>
        <FlatList
          horizontal={true}
          data={randomRecipes}
          keyExtractor={({ id }, index) => `${index}-${id}`}
          ListEmptyComponent={<Text>Empty:</Text>}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingTop: 50,
            paddingHorizontal: Layout.horizontalPadding.medium,
            columnGap: 20,
          }}
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0 }}
        />
      </View>
      <FilterDrawer isVisable={vis} onClose={() => setVis(false)} />
    </AppLayout>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerContanier: {
    paddingTop: 15,
    marginBottom: 35,
    rowGap: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
  },
  subHeader: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 17,
  },
});
