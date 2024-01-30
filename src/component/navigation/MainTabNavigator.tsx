import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {MainTabNavigatorProps, MainTabPageParams, MainTabPages} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeContainer from '../container/HomeContainer';
import AnalizeContainer from '../container/AnalizeContainer';
import IncorrectNoteContainer from '../container/IncorrectNoteContainer';
import TabBarIcon from './TabBarIcon';

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
      <Tab.Screen
        name="HomeContainer"
        component={HomeContainer}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({focused}) => {
            return <TabBarIcon focused={focused} pageName="HomeContainer" />;
          },
        }}
      />
      <Tab.Screen
        name="AnalizeContainer"
        component={AnalizeContainer}
        options={{
          tabBarLabel: '분석',
          tabBarIcon: ({focused}) => {
            return <TabBarIcon focused={focused} pageName="AnalizeContainer" />;
          },
        }}
      />
      <Tab.Screen
        name="IncorrectNoteContainer"
        component={IncorrectNoteContainer}
        options={{
          tabBarLabel: '오답노트',
          tabBarIcon: ({focused}) => {
            return (
              <TabBarIcon focused={focused} pageName="IncorrectNoteContainer" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(MainTabNavigator);
