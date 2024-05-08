import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from './components/CustomTabBar';
import useSafeArea from '../hooks/useSafeAreaView';
import Home from 'src/screens/appScreens/home/Home';
import Notifications from '../screens/appScreens/notifications/Notifications';
import Profile from '../screens/appScreens/profile/Profile';
import Saved from '../screens/appScreens/saved/Saved';
import StackNavHeader from './components/StackNavHeader';
import { themeColors } from '@constants/Colors';

const Tab = createBottomTabNavigator();

const BottomTabsNav = () => (
  <Tab.Navigator
    // initialRouteName="Home"
    screenOptions={({ route, navigation }) => ({
      header: (props) => (
        <StackNavHeader title={route.name} {...props} />
      ),
      contentStyle: {
        backgroundColor: themeColors.neutrals.white,
      },
    })}
    tabBar={(props) => <CustomTabBar {...props} />}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Tab.Screen name="Saved" component={Saved} />
    <Tab.Screen name="Notifications" component={Notifications} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default BottomTabsNav;
