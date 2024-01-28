import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {MainStackNavigatorProps, MainStackPageParams} from './types';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/home/Home';

const Stack = createStackNavigator<MainStackPageParams>();

const MainStackNavigator: FC<MainStackNavigatorProps> = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(MainStackNavigator);
