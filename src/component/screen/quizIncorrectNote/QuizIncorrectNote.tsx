import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {MainStackNavigation} from '../../navigation/types';
import Header from './Header';
import Body from './childrens/Body';

const QuizIncorrectNote = () => {
  const mainStackNavigation = useNavigation<MainStackNavigation>();

  const onPressBack = () => {
    mainStackNavigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header onPressBack={onPressBack} />
      <Body />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default React.memo(QuizIncorrectNote);
