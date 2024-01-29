import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {MainStackNavigatorProps, MainStackPageParams} from './types';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/home/Home';
import QuizPage from '../screen/quizPage/QuizPage';
import IncorrectNote from '../screen/incorrectNote/IncorrectNote';

const Stack = createStackNavigator<MainStackPageParams>();

const MainStackNavigator: FC<MainStackNavigatorProps> = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="QuizPage" component={QuizPage} />
      <Stack.Screen name="IncorrectNote" component={IncorrectNote} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(MainStackNavigator);
