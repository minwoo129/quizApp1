import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {MainStackNavigatorProps, MainStackPageParams} from './types';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/home/Home';
import QuizPage from '../screen/quizPage/QuizPage';
import QuizIncorrectNote from '../screen/quizIncorrectNote/QuizIncorrectNote';
import MainTabNavigator from './MainTabNavigator';
import IncorrectDetail from '../screen/incorrectDetail/IncorrectDetail';

const Stack = createStackNavigator<MainStackPageParams>();

const MainStackNavigator: FC<MainStackNavigatorProps> = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="MainTabNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
      <Stack.Screen
        name="QuizPage"
        component={QuizPage}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen name="QuizIncorrectNote" component={QuizIncorrectNote} />
      <Stack.Screen name="IncorrectDetail" component={IncorrectDetail} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(MainStackNavigator);
