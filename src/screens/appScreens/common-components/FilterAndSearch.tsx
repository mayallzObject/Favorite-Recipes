import FiltersIcon from '@components/icons/FiltersIcon';
import CustomTextInput, {
  CustomTextInputProps,
} from '@components/textInput/CustomTextInput';
import { fonts } from '@constants/typography';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { themeColors } from 'src/constants/Colors';

import { useNavigation } from '@react-navigation/native';
import { MagnifyingGlassIcon } from '@components/icons/MagnifyingGlass';
import { useRef } from 'react';

interface FilterAndSearchProps
  extends Omit<
    CustomTextInputProps,
    'containerStyle' | 'inputStyle' | 'inputContainerStyle'
  > {
  onPress: () => void;
  searchText: string;
}

const FilterAndSearch = ({
  onPress,
  searchText,
  onBlur,
  onFocus,
  ...props
}: FilterAndSearchProps) => {
  const { navigate } = useNavigation();
  const inputRef = useRef<TextInput>(null);

  return (
    <View style={styles.mainContainer}>
      <CustomTextInput
        containerStyle={styles.container}
        labelStyle={styles.label}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        searchIcon={
          <TouchableOpacity
            onPress={() =>
              navigate('SearchResult', { searchText: searchText })
            }
            disabled={searchText === ''}
          >
            <MagnifyingGlassIcon />
          </TouchableOpacity>
        }
        defaultValue={searchText}
        {...props}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <FiltersIcon size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default FilterAndSearch;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    columnGap: 20,
  },
  container: {
    flexGrow: 1,
  },
  label: {
    ...fonts.smallRegular,
    borderColor: themeColors.neutrals.black2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 9,
  },
  input: {
    flex: 1,
    ...fonts.smallRegular,
    borderColor: themeColors.neutrals.black2,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: themeColors.primary.primary100,
  },
});
