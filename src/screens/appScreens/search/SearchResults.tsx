import { RootStackParamList } from 'src/navigation/types';
import { RouteProp } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';
import AppLayout from '@components/AppLayout';
import { FlatList, Text, View } from 'react-native';
import { useFetchRecipesQuery } from '@app/features/recipes/recipes-api-slice';
import RecipeCardBasic from '@components/cards/RecipeCardBasic';
import { useNavigation } from '@react-navigation/native';
import StackNavHeader from 'src/navigation/components/StackNavHeader';
import ArrowLeftIcon from '@components/icons/ArrowLeftIcon';
import React, { useState } from 'react';
import Layout from '@constants/Layout';
import FilterAndSearch from '../common-components/FilterAndSearch';
import FilterDrawer from '../common-components/FiltersDrawer';

type ScreenRouteProp = RouteProp<RootStackParamList, 'SearchResult'>;

const SearchResult = () => {
  const [vis, setVis] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const { navigate, goBack } = useNavigation();
  const { params } = useRoute<ScreenRouteProp>();

  const { data } = useFetchRecipesQuery({
    searchParams: params.searchText,
  });

  const renderItem = ({ item }: { item: any }) => (
    <RecipeCardBasic
      item={item}
      onPress={() => navigate('RecipeDetails', { id: item.id })}
    />
  );

  return (
    <AppLayout noPaddingTop horizontalPadding={0}>
      <StackNavHeader
        leftIcon={<ArrowLeftIcon />}
        onLeftIconPress={() => goBack()}
        title="Search Result"
      />
      <View
        style={{
          paddingHorizontal: Layout.horizontalPadding.medium,
          marginTop: 10,
        }}
      >
        <FilterAndSearch
          onPress={() => {
            setVis(true);
          }}
          onChangeText={(text: string) => setSearchText(text)}
          searchText={
            searchText !== '' ? searchText : params.searchText
          }
        />
      </View>
      <View style={{ flexShrink: 1 }}>
        <FlatList
          data={data?.results}
          numColumns={2}
          keyExtractor={({ id }, index) => `${index}-${id}`}
          ListEmptyComponent={<Text>Empty :(</Text>}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingTop: 30,
            rowGap: 20,
            paddingHorizontal: Layout.horizontalPadding.medium,
          }}
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0 }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          initialNumToRender={10}
        />
      </View>
      <FilterDrawer
        isVisable={vis}
        onClose={() => setVis(false)}
        extraPaddingBottom={100}
      />
    </AppLayout>
  );
};

export default SearchResult;
