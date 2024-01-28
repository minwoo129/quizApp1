import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// ================================================================
export interface RootStackNavigatiorProps {}

export type RootStackPageParams = {
  MainStackNavigator: undefined;
};

export type RootStackNavigation = StackNavigationProp<RootStackPageParams>;

export type RootStackPages = keyof RootStackPageParams;

export type RootStackRouteProp<T extends RootStackPages> = RouteProp<
  RootStackPageParams,
  T
>;
// ================================================================
export interface MainStackNavigatorProps {}

export type MainStackPageParams = {
  Home: undefined;
  QuizPage: undefined;
};

export type MainStackNavigation = StackNavigationProp<MainStackPageParams>;

export type MainStackPages = keyof MainStackPageParams;

export type MainStackRouteProp<T extends MainStackPages> = RouteProp<
  MainStackPageParams,
  T
>;
