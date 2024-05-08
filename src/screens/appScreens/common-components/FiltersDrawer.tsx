import BottomSheetModal from '@components/drawer/bottomDrawer/BottomDrawer';
import FiltersSection from '@components/drawer/bottomDrawer/FiltersSection';
import React, { useState, useCallback } from 'react';
import { Category, Rate, Time } from './contants';
import { Text, View } from 'react-native';
import CustomButton from '@components/buttons/CustomButton';
import useSafeAreaView from '@hooks/useSafeAreaView';

interface FilterDrawerProps {
  onClose: () => void;
  isVisable: boolean;
  extraPaddingBottom?: number;
}

const FilterDrawer = ({
  isVisable,
  onClose,
  extraPaddingBottom,
}: FilterDrawerProps) => {
  const { bottom } = useSafeAreaView();
  const [filters, setFilters] = useState<string[]>([]);

  const handleFilters = (filter: string) => {
    setFilters((prevFilters) => {
      if (prevFilters.includes(filter))
        return prevFilters.filter((item) => item !== filter);

      return [...prevFilters, filter];
    });
  };

  const handlePress = useCallback(handleFilters, [filters]);
  return (
    <BottomSheetModal isVisible={isVisable} onClose={onClose}>
      <View>
        <Text style={{ textAlign: 'center' }}>Modal Content</Text>

        <View style={{ rowGap: 20 }}>
          <FiltersSection
            header="Time"
            tabs={Time}
            preSelected="All"
            onPress={handlePress}
          />
          <FiltersSection
            header="Rating"
            tabs={Rate}
            preSelected="5"
            onPress={handlePress}
          />
          <FiltersSection
            header="Category"
            tabs={Category}
            onPress={handlePress}
          />
        </View>
      </View>
      <View
        style={{
          alignSelf: 'center',
          marginTop: 20,
          paddingBottom: extraPaddingBottom ? 100 : 0,
        }}
      >
        <CustomButton size="small" title="Filter" />
      </View>
    </BottomSheetModal>
  );
};

export default FilterDrawer;
