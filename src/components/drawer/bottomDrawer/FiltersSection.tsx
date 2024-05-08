import { useCallback, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacityProps,
  GestureResponderEvent,
  StyleSheet,
  Pressable,
} from 'react-native';
import { themeColors } from 'src/constants/Colors';

type FiltersSectionProps = {
  tabs: string[];
  onPress: (filter: string) => void;
  header: string;
  preSelected?: string;
};

interface SimpleButtonProps extends TouchableOpacityProps {
  text: string;
  hasFocus?: boolean;
}

export const SimpleButton = ({
  text,
  onPress,
  hasFocus,
  ...props
}: SimpleButtonProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handlePress = useCallback((e: GestureResponderEvent) => {
    setIsFocused((s) => !s);
    onPress?.(e);
  }, []);

  return (
    <Pressable
      {...props}
      style={{
        paddingVertical: 7,
        paddingHorizontal: 20,
        backgroundColor:
          isFocused !== hasFocus
            ? themeColors.primary.primary100
            : themeColors.neutrals.white,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: themeColors.primary.primary100,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontSize: 11,
          lineHeight: 17,
          fontWeight: '600',
          color:
            isFocused !== hasFocus
              ? themeColors.neutrals.white
              : themeColors.primary.primary100,
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const FiltersSection = ({
  tabs,
  preSelected,
  onPress,
  header,
}: FiltersSectionProps) => (
  <View>
    <Text>{header}</Text>
    <View style={styles.container}>
      {tabs.map((a, index) => {
        return (
          <SimpleButton
            key={a + index}
            text={a}
            hasFocus={a === preSelected}
            onPress={() => onPress?.(a)}
          />
        );
      })}
    </View>
  </View>
);

export default FiltersSection;

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
  },
});
