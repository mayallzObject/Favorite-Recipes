import { ReactNode, useMemo } from 'react';
import Animated, {
  FadeInLeft,
  FadeOutLeft,
  LinearTransition as AnimatedLayout,
  ZoomInEasyDown,
  ZoomOutLeft,
} from 'react-native-reanimated';
import Layout from '../constants/Layout';

interface AnimatedLayoutContainerProps {
  children: ReactNode;
}

const AnimatedLayoutContainer = ({
  children,
}: AnimatedLayoutContainerProps) => {
  const animateView = useMemo(() => {
    if (Layout.isAndroid) {
      return {
        entering: ZoomInEasyDown,
        exiting: ZoomOutLeft,
      };
    } else {
      return {
        entering: FadeInLeft,
        exiting: FadeOutLeft,
      };
    }
  }, []);

  return (
    <Animated.View
      style={{ flexGrow: 1 }}
      layout={AnimatedLayout.duration(200).delay(25)}
      entering={animateView.entering}
      exiting={animateView.exiting}
    >
      {children}
    </Animated.View>
  );
};

export default AnimatedLayoutContainer;
