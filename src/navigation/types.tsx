import { NavigatorScreenParams } from '@react-navigation/native';

export enum EnumScreenNames {
  Home = 'Home',
  Saved = 'Saved',
  Notifications = 'Notifications',
  Profile = 'Profile',
  Login = 'Login',
  SignUp = 'SignUp',
}

import type { CompositeScreenProps } from '@react-navigation/native';

import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Root: NavigatorScreenParams<HomeTabParamList>;
  Home: undefined;
  SearchResult: { searchText: string };
  RecipeDetails: { id: string };
  Saved: undefined;
  Notifications: undefined;
  Profile: undefined;
  Login: undefined;
  SignUp: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type HomeTabParamList = {
  Home: undefined;
  Saved: undefined;
  Notifications: undefined;
  Profile: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
