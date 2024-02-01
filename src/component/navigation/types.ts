import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IncorrectQuizRecord} from '../../redux/state/AdditionalTypes';

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
  MainTabNavigator: undefined;
  QuizPage: undefined;
  QuizIncorrectNote: undefined;
  IncorrectDetail: IncorrectDetailRoutType;
};

export type MainStackNavigation = StackNavigationProp<MainStackPageParams>;

export type MainStackPages = keyof MainStackPageParams;

export type MainStackRouteProp<T extends MainStackPages> = RouteProp<
  MainStackPageParams,
  T
>;

export type IncorrectDetailRoutType = {
  record: IncorrectQuizRecord;
};

// ================================================================
export interface MainTabNavigatorProps {}

export type MainTabPageParams = {
  HomeContainer: undefined;
  AnalizeContainer: undefined;
  IncorrectNoteContainer: undefined;
};

export type MainTabNavigation = BottomTabNavigationProp<MainTabPageParams>;

export type MainTabPages = keyof MainTabPageParams;

export type MainTabRouteProp<T extends MainTabPages> = RouteProp<
  MainTabPageParams,
  T
>;

export interface TabBarIconProps extends TabBarIconImageProps {}

export interface TabBarIconImageProps {
  focused: boolean;
  pageName: MainTabPages;
}

export type TabBarIconLabel = {
  [key in MainTabPages]: string;
};
