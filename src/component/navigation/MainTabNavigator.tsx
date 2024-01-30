import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {MainTabNavigatorProps, MainTabPageParams, MainTabPages} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeContainer from '../container/HomeContainer';
import AnalizeContainer from '../container/AnalizeContainer';
import IncorrectNoteContainer from '../container/IncorrectNoteContainer';

const Tab = createBottomTabNavigator<MainTabPageParams>();

const MainTabNavigator: FC<MainTabNavigatorProps> = ({}) => {
  let initialRouteName: MainTabPages = 'HomeContainer';

  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      backBehavior="none"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          width: '100%',
          height: 90,
        },
        tabBarIconStyle: {
          flex: 1,
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen name="HomeContainer" component={HomeContainer} />
      <Tab.Screen name="AnalizeContainer" component={AnalizeContainer} />
      <Tab.Screen
        name="IncorrectNoteContainer"
        component={IncorrectNoteContainer}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(MainTabNavigator);
