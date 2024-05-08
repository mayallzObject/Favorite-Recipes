import React, {
  ReactElement,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { themeColors } from 'src/constants/Colors';

export interface CustomTextInputProps extends TextInputProps {
  containerStyle: StyleProp<ViewStyle>;
  inputStyle: StyleProp<TextStyle>;
  inputContainerStyle: StyleProp<ViewStyle>;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  searchIcon?: ReactElement;
  focusColor?: string;
}

const CustomTextInput = (props: CustomTextInputProps) => {
  const {
    containerStyle,
    label,
    inputContainerStyle,
    inputStyle,
    labelStyle,
    searchIcon,
    focusColor,
    onBlur,
    onFocus,
    ...rest
  } = props;
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const handleOnFocus = (
    e: NativeSyntheticEvent<TextInputFocusEventData>
  ) => {
    onFocus?.(e);
    setIsFocused(true);
  };

  const handleOnBlur = (
    e: NativeSyntheticEvent<TextInputFocusEventData>
  ) => {
    onBlur?.(e);
    setIsFocused(false);
  };

  return (
    <View style={containerStyle}>
      {label && <Text style={labelStyle}>{label}</Text>}
      <View
        style={[
          inputContainerStyle,
          {
            borderColor:
              isFocused && focusColor
                ? focusColor
                : themeColors.neutrals.gray4,
          },
        ]}
      >
        {searchIcon && searchIcon}
        <TextInput
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          style={inputStyle}
          {...rest}
        />
      </View>
    </View>
  );
};

export default CustomTextInput;
