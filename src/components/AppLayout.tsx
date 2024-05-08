import { ReactNode, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import AnimatedLayoutContainer from '@hooks/AnimatedLayoutContainer';
import Layout from '@constants/Layout';
import useSafeAreaView from '@hooks/useSafeAreaView';
import { themeColors } from '@constants/Colors';

interface AppLayoutProps {
  children: ReactNode;
  isNotAnimated?: boolean;
  horizontalPadding?: number;
  paddingTop?: number;
  noPaddingTop?: boolean;
}

const AppLayout = ({
  children,
  noPaddingTop = false,
  isNotAnimated = false,
  horizontalPadding = Layout.horizontalPadding.medium,
}: AppLayoutProps) => {
  const { top } = useSafeAreaView();

  return (
    <View
      style={[
        styles.container,
        {
          paddingHorizontal: horizontalPadding
            ? Layout.isSmallDevice
              ? horizontalPadding / 1.5
              : horizontalPadding
            : 0,
          paddingTop: noPaddingTop ? 0 : top,
        },
      ]}
    >
      {isNotAnimated ? (
        children
      ) : (
        <AnimatedLayoutContainer>{children}</AnimatedLayoutContainer>
      )}
    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.neutrals.white,
  },
});
