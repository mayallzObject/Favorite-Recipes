import { useMemo } from 'react';
import { themeColors } from 'src/constants/Colors';
import { ButtonSizeProps, UseReSizableStyleProps } from './types';
import { StyleSheet } from 'react-native';
import { fonts } from '@constants/typography';

export const useReSizableButtonStyles = ({
  size = 'large',
  textColor,
}: UseReSizableStyleProps) => {
  const pressableContentStyles = useMemo(() => {
    const buttonSizes: ButtonSizeProps = {
      small: {
        ...fonts.smallerBold,
        height: 36,
        paddingVertical: 10,
        paddingHorizontal: 30,
        gap: 9,
      },
      medium: {
        ...fonts.normalBold,
        height: 54,
        paddingVertical: 15,
        paddingHorizontal: 50,
        gap: 11,
      },
      large: {
        ...fonts.normalBold,
        height: 54,
        paddingVertical: 15,
        paddingHorizontal: 85,
        gap: 11,
      },
    };

    const {
      height,
      paddingVertical,
      paddingHorizontal,
      fontSize,
      lineHeight,
      gap,
    } = buttonSizes[size];

    return StyleSheet.create({
      contentContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height,
        paddingVertical,
        paddingHorizontal,
        borderRadius: 10,
        gap,
      },
      text: {
        fontSize,
        minWidth: size === 'small' ? 40 : 114,
        lineHeight,
        fontWeight: '600',
        color: textColor || themeColors.neutrals.white,
        textAlign: 'center',
      },
    });
  }, [size, textColor]);

  return { pressableContentStyles };
};
