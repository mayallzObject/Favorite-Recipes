import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import useSafeAreaView from 'src/hooks/useSafeAreaView';
import { themeColors } from 'src/constants/Colors';
import { useMemo } from 'react';
import SavedIcon from '@components/icons/SavedIcon';
import NotificationIcon from '@components/icons/NotificationsIcon';
import ProfileIcon from '@components/icons/ProfileIcon';
import HomeIcon from '@components/icons/HomeIcon';

interface CustomTabBarProps extends BottomTabBarProps {
  icons?: Record<string, any>;
}

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: CustomTabBarProps) => {
  const { bottom } = useSafeAreaView();

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const routeIcon = useMemo(() => {
          if (route.name === 'Home') {
            return (
              <HomeIcon
                fillColor2={
                  !isFocused ? 'none' : themeColors.primary.primary40
                }
                strokeColor={
                  !isFocused
                    ? '#D9D9D9'
                    : themeColors.primary.primary100
                }
              />
            );
          }
          if (route.name === 'Saved') {
            return <SavedIcon isFocused={isFocused} />;
          }
          if (route.name === 'Notifications') {
            return <NotificationIcon isFocused={isFocused} />;
          }
          if (route.name === 'Profile') {
            return (
              <ProfileIcon
                fillColor={
                  !isFocused ? 'none' : themeColors.primary.primary40
                }
                strokeColor={
                  !isFocused
                    ? '#D9D9D9'
                    : themeColors.primary.primary100
                }
              />
            );
          }
        }, [isFocused, route.name === 'Home']);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              key: route.key,
              name: route.name,
              merge: true,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ paddingBottom: bottom }}
          >
            {routeIcon}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 25,
    paddingBottom: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#6C6C6C',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.08,
        shadowRadius: 8,
      },
      android: {
        elevation: 2,
      },
    }),
  },
});
