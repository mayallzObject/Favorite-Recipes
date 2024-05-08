import { themeColors } from '@constants/Colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/appScreens/home/Home';
import Notifications from '@screens/appScreens/notifications/Notifications';
import Profile from '@screens/appScreens/profile/Profile';
import RecipeDetails from '@screens/appScreens/recipe-details/RecipeDetails';
import Saved from '@screens/appScreens/saved/Saved';
import SearchResult from '@screens/appScreens/search/SearchResults';
import Login from '@screens/authScreens/login/Login';
import SignUp from '@screens/authScreens/signup/SignUp';
import React from 'react';
import BottomTabsNav from './BottomStackNavigation';
import { RootStackParamList } from './types';
import { useTempAuth } from '../context/useTempAuth';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { isAuth } = useTempAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: themeColors.neutrals.white,
        },
      }}
    >
      {isAuth ? (
        <>
          <Stack.Screen name={'Root'} component={BottomTabsNav} />
          <Stack.Screen
            name={'Home'}
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name={'SearchResult'}
            component={SearchResult}
          />

          <Stack.Screen name={'Saved'} component={Saved} />
          <Stack.Screen
            name={'Notifications'}
            component={Notifications}
          />
          <Stack.Screen
            name={'RecipeDetails'}
            component={RecipeDetails}
          />
          <Stack.Screen name={'Profile'} component={Profile} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
