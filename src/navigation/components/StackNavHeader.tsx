import { themeColors } from '@constants/Colors';
import Layout from '@constants/Layout';
import { ReactElement, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
} from 'react-native';

import useSafeAreaView from 'src/hooks/useSafeAreaView';

type StackNavHeaderProps = {
  title?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  hasDropDown?: boolean;
  child?: ReactElement;
};

const StackNavHeader = ({
  title,
  leftIcon,
  rightIcon,
  hasDropDown,
  onLeftIconPress,
  onRightIconPress,
  child,
}: StackNavHeaderProps) => {
  const { top } = useSafeAreaView();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      {leftIcon ? (
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={onLeftIconPress}
        >
          {leftIcon}
        </TouchableOpacity>
      ) : (
        <View style={{ flex: 1 }} />
      )}
      <Text style={styles.title}>{title}</Text>
      {rightIcon ? (
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            onRightIconPress?.();
            hasDropDown ? setIsOpen((s) => !s) : undefined;
          }}
        >
          {rightIcon}
        </TouchableOpacity>
      ) : (
        <View style={{ flex: 1 }} />
      )}
      {hasDropDown && isOpen ? (
        <Modal transparent={true} visible={true}>
          <Pressable
            style={styles.overlay}
            onPress={() => setIsOpen(false)}
          />

          {child && child}
        </Modal>
      ) : null}
    </View>
  );
};

export default StackNavHeader;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    paddingBottom: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 4,
    paddingHorizontal: Layout.horizontalPadding.medium,
    backgroundColor: themeColors.neutrals.white,
    zIndex: 1000,
  },
  title: {
    flex: 8,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
  },
});
