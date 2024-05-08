import { Pressable, Text, View } from 'react-native';
import { themeColors } from '@constants/Colors';
import { CustomButtonProps } from './types';
import { useReSizableButtonStyles } from './useReSizableButtonStyles';

const CustomButton = ({
  size = 'medium',
  title,
  backgroundColor,
  textColor,
  disabled = false,
  buttonIcon,
  ...pressableProps
}: CustomButtonProps) => {
  const { pressableContentStyles } = useReSizableButtonStyles({
    size,
    textColor,
  });
  return (
    <Pressable disabled={disabled} {...pressableProps}>
      {({ pressed }) => (
        <View
          style={{
            ...pressableContentStyles?.contentContainer,
            backgroundColor: pressed
              ? themeColors.primary.primary80
              : backgroundColor || themeColors.primary.primary100,
          }}
        >
          <Text style={pressableContentStyles?.text}>{title}</Text>
          {buttonIcon && buttonIcon}
        </View>
      )}
    </Pressable>
  );
};

export default CustomButton;
