import { useState } from 'react';
import CustomTextInput, {
  CustomTextInputProps,
} from '@components/textInput/CustomTextInput';
import { StyleSheet, Text, View } from 'react-native';
import { themeColors } from 'src/constants/Colors';
import { fonts } from '@constants/typography';

interface AuthTextInputProps
  extends Omit<
    CustomTextInputProps,
    'onFocus' | 'onBlur' | 'containerStyle' | 'inputStyle'
  > {
  label: string;
}

const AuthTextInput = ({ label, ...props }: AuthTextInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <CustomTextInput
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        containerStyle={[
          styles.inputContainer,
          {
            borderColor: isFocused
              ? themeColors.neutrals.gray4
              : themeColors.primary.pri,
          },
        ]}
      />
    </View>
  );
};

export default AuthTextInput;

const styles = StyleSheet.create({
  container: {
    rowGap: 8,
  },
  inputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
  },
  label: {
    ...fonts.smallRegular,
    borderColor: themeColors.neutrals.black2,
  },
});
