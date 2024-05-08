import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
  ReactNode,
} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

interface BottomSheetModalProps {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
}

const BottomSheetModal = ({
  children,
  isVisible,
  onClose,
}: BottomSheetModalProps) => {
  const translateY = useSharedValue(0); // Start with the modal off-screen
  const containerRef = useRef(null);

  const modalStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const closeModal = () => {
    translateY.value = withTiming(200, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
    onClose();
  };

  useEffect(() => {
    if (isVisible) {
      translateY.value = withTiming(0, {
        duration: 300,
        easing: Easing.out(Easing.ease),
      });
    }
  }, [isVisible]);

  const handleBackdropPress = () => closeModal();

  if (!isVisible) return null;

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleBackdropPress}>
        <Animated.View style={[styles.backdrop]} />
      </TouchableWithoutFeedback>
      <Animated.View
        ref={containerRef}
        style={[styles.modal, modalStyle]}
      >
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    zIndex: 1000,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 2000,
  },
  modal: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 60,
    zIndex: 3000,
  },
  closeButton: {
    alignItems: 'flex-end',
  },
  content: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default BottomSheetModal;
