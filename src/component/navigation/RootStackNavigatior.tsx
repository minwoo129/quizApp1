import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStackNavigatiorProps, RootStackPageParams} from './types';
import {createStackNavigator} from '@react-navigation/stack';
import MainStackNavigator from './MainStackNavigator';

const Stack = createStackNavigator<RootStackPageParams>();

const RootStackNavigatior: FC<RootStackNavigatiorProps> = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="MainStackNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainStackNavigator" component={MainStackNavigator} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(RootStackNavigatior);
